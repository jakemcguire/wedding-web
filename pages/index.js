import Head from 'next/head'
import Image from 'next/image'
import splashImage from '../public/images/palm-canyon-drive.webp'

export default function Home() {
  return (
    <section>
      <Image
        priority
        src={splashImage}
        alt="Rebecca Lewis &amp; Jake McGuire are getting married in Palm Springs, California on April 9, 2022"
      />
    </section>
  )
}
