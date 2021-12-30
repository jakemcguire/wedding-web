import Head from 'next/head'
import styles from '../styles/Schedule.module.css'
import Activity from '../components/activity.js'
import activitiesData from '../content/activities.json'

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
			<section className={styles.dining}>
				<h2>Dining</h2>
				{
					activitiesData.dining.map(activity => {
						return Activity(activity);
					})
				}
			</section>
			<section className={styles.inTownActivities}>
				<h2>Activities In-Town</h2>
				{
					activitiesData.inTownActivities.map(activity => {
						return Activity(activity);
					})
				}
			</section>
			<section className={styles.nearbyActivities}>
				<h2>Activities Nearby</h2>
				{
					activitiesData.nearbyActivities.map(activity => {
						return Activity(activity);
					})
				}
			</section>
			<section className={styles.nearbyActivities}>
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