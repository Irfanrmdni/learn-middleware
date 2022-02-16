import { NextResponse } from "next/server";

export default function middleware(req) {
    const { token } = req.cookies;

    //? melakukan logic jika tidak ada token maka akan redirect ke halaman login
    if (!token) {
        return NextResponse.redirect('http://localhost:3000/login');
    }
}