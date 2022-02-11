import Image from 'next/image'
import styles from './activity.module.css'
import pinSvg from '../public/images/map-pin.svg'

export default function Activity({ title, street, city, state, zip, googleMaps, description }) {
    return (
        <div className={styles.activityContainer} key={title}>
            <div className={styles.title}>{title}</div>
            <div className={styles.location}>
                <a href={googleMaps} target="_blank">
                    <Image src={pinSvg} width={16} height={16} />
                    <span className={styles.address}>{street}, {city}, {state} {zip}</span>
                </a>
            </div>
            <div className="description">{description}</div>
        </div>
    )
}