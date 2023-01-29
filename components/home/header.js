import Image from 'next/image'

import utilStyles from '../../styles/utils.module.css'
import styles from './header.module.css'

export default function Header({children, home}) {
    const name = 'Bernardo Lopez'
    const profilePicture = 'https://res.cloudinary.com/dpj0p14lm/image/upload/v1674069681/IMG_3354_wgirhd.jpg'
    return (
        <div className={styles.header}>
            {home ? (
          <>
            <Image
              priority
              src={profilePicture}
              className={`${utilStyles.borderCircle} ${utilStyles.justifyCenter}`}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
            ) : (
          <>
            <Link href="/">
              <Image
                priority
                src={profilePicture}
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt={name}
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
        </div>
    )
}