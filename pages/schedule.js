import Head from 'next/head'
import styles from '../styles/Schedule.module.css'

export default function Schedule() {
  return (
    <section>
      <Head>
				<title>Lewis-McGuire Wedding | Weekend Program</title>
				<meta
					name="description"
					content="Wedding schedule and events for the weekend of April 8-9, 2022"
				/>
			</Head>
      <h1>Weekend Program</h1>
      <div className={styles.schedule}>
        <span className={styles.day}>Friday, April 8</span>
        <span className={styles.eventDetails}>
            <span>Welcome Drinks, Dinner, and Karaoke</span>
            <span><a href="https://www.thereefpalmsprings.com/" target="_blank" rel="noreferrer">The Reef</a> (411 E. Palm Canyon Drive)</span>
            <span>6:00-10:00 PM</span>
        </span>
        <span className={styles.day}>Saturday, April 9</span>
        <span className={styles.eventDetails}>
            <span>Wedding Ceremony</span>
            <span>The Commune Garden @ The Ace Hotel</span>
            <span>4:30-5:00 PM</span>
        </span>
        <span className={styles.eventDetails}>
            <span>Cocktail Hour (featuring <a href="https://www.theblanktapes.com/" target="_blank" rel="noreferrer">The Blank Tapes</a>)</span>
            <span>The Commune @ The Ace Hotel</span>
            <span>5:00-6:30 PM</span>
        </span>
        <span className={styles.eventDetails}>
            <span>Dinner and Dancing</span>
            <span>The Commune @ The Ace Hotel</span>
            <span>6:30 PM 'til Late</span>
        </span>
      </div>
    </section>
  )
}
