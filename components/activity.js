import styles from './activity.module.css'

export default function Activity({ title, street, city, state, zip, googleMaps, description }) {
    return (
        <div className={styles.activityContainer}>
            <div className={styles.title}>{title}</div>
            <div className={styles.location}>
                <span className={styles.address}>{street}, {city}, {state} {zip}</span>
                <span className={styles.googleMaps}><a href={googleMaps} target="_blank">Google Maps</a></span>
            </div>
            <div className="description">{description}</div>
        </div>
    )
}