import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function Statistic() {
    return (
        <div className={styles.container}>
            Statistic
            <Link href="/dashboard"><a>Dashboard</a></Link>
        </div>
    )
}