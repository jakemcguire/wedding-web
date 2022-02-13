import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';
import hamburgerIcon from '../public/images/hamburger.svg'
import styles from './layout.module.css'

export default function Header() {
    const [menuCollapsed, setClosed] = useState(true);
    const toggle = () => setClosed((x) => !x)

    return (
        <div className={styles.header}>
            <div>Becca &amp; Jake</div>
            <div className={styles.hamburger} onClick={toggle}>
                <Image src={hamburgerIcon} alt="navbar" />
                <div className={`${styles.menu} ${menuCollapsed ? styles.menuClosed : styles.menuOpen}`}>
                    <Link href="/">
                        <a className={styles.menuOption}>Home</a>
                    </Link>
                    <Link href="/schedule">
                        <a className={styles.menuOption}>Weekend Program</a>
                    </Link>
                    <Link href="/activities">
                        <a className={styles.menuOption}>Daytime Recreation</a>
                    </Link>
                    <Link href="/accomodations">
                        <a className={styles.menuOption}>Travel &amp; Accomodations</a>
                    </Link>
                    <a href="https://www.zola.com/registry/beccajakewedding" target="_blank" rel="noreferrer" className={styles.menuOption}>Registry</a>
                </div>
            </div>
        </div>
    )
}