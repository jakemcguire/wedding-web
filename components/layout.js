import Head from 'next/head'
import Header from './header'
import Footer from './footer'
import styles from './layout.module.css'

export default function Layout({ children }) {
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>Lewis-McGuire Wedding</title>
                <meta
                    name="description"
                    content="Rebecca Lewis and Jake McGuire Wedding - April 9, 2022"
                />
            </Head>
            <Header />
            <main className={styles.container}>{children}</main>
            <Footer />
        </div>
    )
}