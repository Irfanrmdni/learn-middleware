import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
   return (
      <div className={styles.container}>
         Belajar middleware
         <Link href="/login"><a>Login pages</a></Link>
         <Link href="/coba"><a>Coba pages</a></Link>
         <Link href="/notfound"><a>Not Found pages</a></Link>
      </div>
   )
}
