import Link from 'next/link'
import {linkedinlogo, githublogo} from '../../public/companies'
import styles from './socials.module.css'

export default function Socials() {
    const linkedinUrl = 'https://www.linkedin.com/in/bernardo-lopez-bautista/';
    const githubUrl = 'https://github.com/anreb';
    return (
        <div className={`${styles.socialsContainer}`}>
            <div className={`${styles.logoWrap}`}>
                <a href={linkedinUrl}>{linkedinlogo}</a>
            </div>
            <div className={`${styles.logoWrap}`}>
                <a href={githubUrl}>{githublogo}</a>
            </div>
        </div>
    )
}