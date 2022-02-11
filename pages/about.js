import Image from 'next/image'
import styles from '../styles/About.module.css'
import beccaImg from '../public/images/becca.png'
import jakeImg from '../public/images/jake.jpg'
import cutemeetImg from '../public/images/oldies.webp'

export default function HowWeMet() {
    return (
        <div className={styles.aboutContainer}>
            <div id="becca" className={styles.section}>
                <div className={styles.image}><Image src={jakeImg} /></div>
                <div>Just a small town girl livin' in a lonely world</div>
            </div>
            <div id="jake" className={styles.section}>
                <div className={styles.image}><Image src={jakeImg} /></div>
                <div>Just a city boy born and raised in south Detroit</div>
            </div>
            <div id="cutemeet" className={styles.section}>
                <div className={styles.image}><Image src={cutemeetImg} /></div>
                <div>For a smile they could share the night it goes on and on and on and on</div>
            </div>
        </div>
    )
}