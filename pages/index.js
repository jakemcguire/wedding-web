import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import scheduleSvg from '../public/images/schedule.svg'
import videoSvg from '../public/images/video.svg'
import registrySvg from '../public/images/registry.svg'

export default function Home() {
  return (
    <section>
      <h1>Welcome to Palm Springs!</h1>
      <div className={styles.container}>
        <div className={styles.linkContainer}>
          <Image src={scheduleSvg} width={30} height={30} />
          <Link href="/schedule">
            <a>Schedule</a>
          </Link>
        </div>
        <div className={styles.linkContainer}>
          <Image src={videoSvg} width={30} height={30} />
          <a href="https://www.dropbox.com/request/KBlKRXfwbb9N7vbzOirx" target="_blank" rel="noreferrer" className={styles.link}>Upload Your Toast</a>
        </div>
        <div className={styles.linkContainer}>
          <Image src={registrySvg} width={30} height={30} />
          <a href="https://www.zola.com/registry/beccajakewedding" target="_blank" rel="noreferrer" className={styles.link}>Registry</a>
        </div>
      </div>
    </section>
  )
}
