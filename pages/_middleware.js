import { NextResponse } from "next/server";

export default function middleware(req) {
    const { token } = req.cookies;
    const url = req.url;
    //? untuk mengambil response dari request. dan kita akan set atau ubah response nya 
    const res = NextResponse.next();

    // console.log(req.cookies);

    //? kita akan set atau ubah response nya. yaitu cookie dengan httpOnly: true supaya hanya bisa diakses di server
    res.cookie('session_from_server', 'irfanramdani', {
        httpOnly: true
    });

    //? ketika ada token ini akan redirect ke halaman dashboard. namun ini akan error karena di halaman dashboard
    //? ada function middleware juga. jadi setelah redirect ke halaman dashboard. di dashbord akan melakukan redirect juga 
    //? ke halaman dashboard itu sendiri karena menyimpan function middleware
    // if (token) {
    //     return NextResponse.redirect('/dashboard');
    // }

    //? kita lakukan logic supaya tidak error. jadi jika token nya ada dan url nya sama dengan login maka 
    //? akan redirect ke halaman dashbord. jadi ketika di halaman dashboard dia tidak akan melakukan redirect lagi
    //? karena kita sudah melakukan logic di kondisi kedua yaitu url === '/login' jadi tidak akan terpenuhi
    if (token && url === 'http://localhost:3000/login') {
        return NextResponse.redirect('/dashboard');
    }

    //? melakukan logic jika url nya sama dengan coba maka dia akan merender halaman atau component notfound.
    //? jadi yang akan ditampilkan bukan halaman coba tapi halaman notfound. url nya masih tetap sama yaitu coba
    if (url === 'http://localhost:3000/coba') {
        return NextResponse.rewrite('/notfound');
    }

    return res;
}