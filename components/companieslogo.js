import styles from './companieslogo.module.css'
import { kavaklogo, disneylogo, bestowlogo, ironhacklogo } from '../public/companies'

export default function CompaniesLogo() {
    return (
        <div className={`${styles.companiesContainer}`}>
            <div className={`${styles.logoWrap}`}>{kavaklogo}</div>
            <div className={`${styles.logoWrap}`}>{disneylogo}</div>
            <div className={`${styles.logoWrap}`}>{bestowlogo}</div>
            <div className={`${styles.logoWrap}`}>{ironhacklogo}</div>
        </div>
    )
}