import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Activities.module.css'
import Activity from '../components/activity.js'
import activitiesData from '../content/activities.json'
import diningSvg from '../public/images/dining.svg'
import inTownActivitiesSvg from '../public/images/in-town-activities.svg'
import nearbyActivitiesSvg from '../public/images/nearby-activities.svg'
import golfSvg from '../public/images/golf.svg'

export default function Schedule() {
	return (
		<div>
			<Head>
				<title>Daytime Recreation</title>
				<meta
					name="description"
					content="Lewis-McGuire Wedding: Activities in Palm Springs, California for wedding guests"
				/>
			</Head>
			<div className={styles.tabSet} id="tabSet">
				<a href="#dining" className={styles.navigationTab}>
					<Image src={diningSvg} height={36} width={36} />
					<div>Bars &amp; Restaurants</div>
				</a>
				<a href="#inTownActivities" className={styles.navigationTab}>
					<Image src={inTownActivitiesSvg} height={36} width={36} />
					<div>Activities in Town</div>
				</a>
				<a href="#nearbyActivities" className={styles.navigationTab}>
					<Image src={nearbyActivitiesSvg} height={36} width={36} />
					<div>Activities Nearby</div>
				</a>
				<a href="#golf" className={styles.navigationTab}>
					<Image src={golfSvg} height={36} width={36} />
					<div>Golf</div>
				</a>
			</div>
			<section id="dining" className={styles.dining}>
				<h2>Bars &amp; Restaurants</h2>
				{
					activitiesData.dining.map(activity => {
						return Activity(activity);
					})
				}
			</section>
			<section id="inTownActivities" className={styles.inTownActivities}>
				<h2>Activities in Town</h2>
				{
					activitiesData.inTownActivities.map(activity => {
						return Activity(activity);
					})
				}
			</section>
			<section id="nearbyActivities" className={styles.nearbyActivities}>
				<h2>Activities Nearby</h2>
				{
					activitiesData.nearbyActivities.map(activity => {
						return Activity(activity);
					})
				}
			</section>
			<section id="golf" className={styles.nearbyActivities}>
				<h2>Golf</h2>
				{
					activitiesData.golf.map(activity => {
						return Activity(activity);
					})
				}
			</section>
		</div>
	)
}