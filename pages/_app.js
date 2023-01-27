import Head from 'next/head'

import '../styles/global.css'

export const siteTitle = 'Bernardo Lopez'

export default function App({ Component, pageProps }) {
  return <>
    <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="index, follow"></meta>
        <meta
          name="description"
          content="Built my personal blog with Next.js"
        />
        <meta
          property="og:image"
          content="Bernardo Lopez Bautista's profile picture"
        />
        <meta name="og:title" content={siteTitle} />
        <meta property="og:locale" content="es_MX"></meta>
        <meta property="og:site_name" content="Bernardo Lopez Dev"></meta>
        <meta property="og:type" content="website"></meta>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
    <Component {...pageProps} />
  </>
}
