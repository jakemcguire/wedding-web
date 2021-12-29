import Head from 'next/head'
import styles from '../styles/Schedule.module.css'

export default function Schedule() {
  return (
    <section>
      <h1>Weekend Program</h1>
      <div className={styles.schedule}>
        <span className={styles.day}>Friday, April 8</span>
        <span className={styles.eventDetails}>
            <span>Welcome Drinks</span>
            <span><a href="https://www.thereefpalmsprings.com/" target="_blank">The Reef</a> (411 E. Palm Canyon Drive)</span>
            <span>6:00-10:00 PM</span>
        </span>
        <span className={styles.day}>Saturday, April 9</span>
        <span className={styles.eventDetails}>
            <span>Wedding Ceremony</span>
            <span>The Commune Garden @ The Ace Hotel</span>
            <span>5:00-5:30 PM</span>
        </span>
        <span className={styles.eventDetails}>
            <span>Cocktail Hour (featuring <a href="https://www.theblanktapes.com/" target="_blank">The Blank Tapes</a>)</span>
            <span>The Commune @ The Ace Hotel</span>
            <span>5:30-6:30 PM</span>
        </span>
        <span className={styles.eventDetails}>
            <span>Dinner and Dancing</span>
            <span>The Commune @ The Ace Hotel</span>
            <span>6:30-11:00 PM</span>
        </span>
        <span className={styles.eventDetails}>
            <span>After Party</span>
            <span>The Amigo Room @ The Ace Hotel</span>
            <span>11:00 PM - Late</span>
        </span>
      </div>
    </section>
  )
}
