import Link from 'next/link'
import styles from '../../../styles/Home.module.css'

export default function Create() {
    return (
        <div className={styles.container}>
            Create
            <Link href="/dashboard"><a>Dashboard</a></Link>
        </div>
    )
}