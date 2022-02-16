import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function Dashboard() {
    return (
        <div className={styles.container}>
            Dashboard
            <Link href="/dashboard/statistics"><a>Statistics</a></Link>
            <Link href="/dashboard/products/create"><a>Products</a></Link>
            <Link href="/"><a>Back</a></Link>
        </div>
    )
}