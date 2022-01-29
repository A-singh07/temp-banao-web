/* eslint-disable @next/next/no-page-custom-font */
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/root/root.css'
import '../styles/reset.css'
import '../styles/globals.css'
import Head from 'next/head'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>

        <title>Banao Technologies</title>

        {/* favicon */}
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" type="image/png" size="512x512" href="/android-chrome-512x512.png" />
        {/* <link rel="icon" type="image/png" size="192x192" href="/android-chrome-192x192.png" /> */}
        <link rel="icon" type="image/png" size="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" size="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        {/* <script src="/root/root.js" async></script> */}
      </Head>

      <>
        <Script
          strategy='lazyOnload'
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />

        <Script
          strategy='lazyOnload'
          id='google-analytics'
        >
          {
            `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)};
            gtag('js', new Date());

            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
            `
          }
        </Script>
      </>
      <div id="website-wrapper">
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
