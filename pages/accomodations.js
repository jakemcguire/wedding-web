import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Accomodations.module.css'
import pinSvg from '../public/images/map-pin.svg'

export default function Accomodations() {
    return (
        <div>
            <h1>Travel &amp; Accomodations</h1>
            <section id="accomodations" className={styles.accomodations}>
				<h2>Official Room Blocks</h2>
				<div className={styles.accomodationContainer}>
                    <a href="" target="_blank"><div className={styles.title}>The Ace Hotel</div></a>
                    <div className={styles.location}>
                        <a href="https://www.google.com/maps/place/Ace+Hotel+%26+Swim+Club/@33.8009284,-116.5397318,15z/data=!4m2!3m1!1s0x0:0x9a6d0c4d3dba305c?sa=X&ved=2ahUKEwi-7oL__of1AhXVHc0KHegaD8gQ_BJ6BAhGEAU" target="_blank">
                            <Image src={pinSvg} width={16} height={16} />
                            <span className={styles.address}>701 E. Palm Canyon Drive, Palm Springs, CA 92264</span>
                        </a>
                    </div>
                    <div className={styles.description}>
                        <span>The Ace Hotel is where our ceremony and reception will be hosted. Our guests have access to two promo codes for wedding rooms:</span>
                        <ul>
                            <li>BECCAJAKE1: 10% discount for Friday/Saturday room blocks</li>
                            <li>ARTSHOW: 15% discount for Wednesday, Thursday, and/or Sunday</li>
                        </ul>
                        <span>If you plan to take advantage of these offers, it is recommended to call the front desk as the group rate may not be reflected online. The reservation line is <a href="tel:+17603259900">760-325-9900</a>. Email inquiries can be sent to <a href="mailto:reservations.psp@acehotel.com">reservations.psp@acehotel.com</a>.</span>
                    </div>
                </div>
                <div className={styles.accomodationContainer}>
                    <a href="https://www.sonder.com/destinations/palm_springs/Sonder-at-V-Palm-Springs-ADA-Private-Room/c31515" target="_blank"><div className={styles.title}>V Palm Springs</div></a>
                    <div className={styles.location}>
                        <a href="https://www.google.com/maps/place/Sonder+%7C+V+Palm+Springs/@33.8009228,-116.5437056,15z/data=!4m2!3m1!1s0x0:0xd69599e50f5e35f6?sa=X&ved=2ahUKEwiT24SU7Iz1AhXTB80KHYWOCq4Q_BJ6BAgNEAU" target="_blank">
                            <Image src={pinSvg} width={16} height={16} />
                            <span className={styles.address}>333 E. Palm Canyon Dr, Palm Springs, CA 92264</span>
                        </a>
                    </div>
                    <div className={styles.description}>V Palm Springs is a short walk from all weekend activities. Our guests can receive a 10% discount with code VWEDDING10, valid for bookings up to 2 weeks before the wedding. Guests are encouraged to book directly through <a href="https://www.sonder.com/destinations/palm_springs/Sonder-at-V-Palm-Springs-ADA-Private-Room/c31515" target="_blank">the V Hotel website</a>.</div>
                </div>
			</section>
            <section id="travel" className={styles.accomodations}>
                <h2>Travel</h2>
                <div className={styles.accomodationContainer}>
                    <div className={styles["no-location-title"]}>Flights</div>
                    <div className={styles.description}>Palm Springs Int'l Airport (PSP) is two miles east of downtown Palm Springs, a short 8-minute drive from where all of our festivities will take place. There are direct flights into Palm Springs from Denver (via United), New York JFK (via JetBlue), and San Francisco (via Alaska and United).</div>
                </div>
                <div className={styles.accomodationContainer}>
                    <div className={styles["no-location-title"]}>Car Rentals &amp; Uber/Lyft</div>
                    <div className={styles.description}>The weekend has been planned to minimize any schlepping once you arrive in Palm Springs. If you are staying downtown and don't have any <Link href="/activities#nearbyActivities"><a>daytime excursions</a></Link> planned, you will probably not need a car. All the events will take place in or near The Ace Hotel, so we anticipate most guests will be able to walk or Uber/Lyft to <Link href="/schedule"><a>wedding events</a></Link>.</div>
                </div>
            </section>
            <section id="covid19" className={styles.accomodations}>
                <h2>COVID-19</h2>
                <div className={styles.accomodationContainer}>
                    <div className={styles.description}>
                        <div>For the safety and enjoyment of other guests, please come vaccinated to celebrate with our friends and family on this special day. To give our guests additional peace of mind:</div>
                        <ul>
                            <li>Palm Springs has a 96% vaccination rate, among the highest in the world</li>
                            <li>All of our wedding events will be held in outdoor spaces or areas with outside seating available</li>
                            <li>The City of Palm Springs requires proof of vaccination to enter restaurants and other businesses. Please be advised you will need your vaccination card to enter many places in the city.</li>
                            <li>Additionally, Palm Springs has an indoor masking requirement for public spaces. At this time our event would not fall under the masking mandate, but we will update guests on the <a href="https://www.palmspringsca.gov/government/covid-19-updates" target="_blank">latest guidance</a> closer to the event.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}