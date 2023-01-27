import Script from 'next/script'
import Header from './header.js'

import styles from './layout.module.css'
import Link from 'next/link'

export const siteTitle = 'Bernardo Lopez'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <Header home/>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  )
}
