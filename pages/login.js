import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function Login() {
    return (
        <div className={styles.container}>
            <button type="submit" onClick={() => {
                return document.cookie = 'token=123456; path=/';
            }}>add cookie</button>
            <Link href="/dashboard"><a>Dashboard Pages</a></Link>
            <Link href="/api/hello"><a>Api Route</a></Link>
            <Link href="/"><a>Back</a></Link>
        </div>
    )
}