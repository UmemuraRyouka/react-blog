// import { useEffect } from 'react'
// import { useRouter } from 'next/router'
import '../styles/globals.css'
import Layout from '../components/layout'
import Script from 'next/script'
// import * as gtag from 'lib/gtag'


// Font Awesome config
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  // const router = useRouter()
  const getLayout = Component.getLayout || ((page) => page)
  
  // useEffect(() => {
  //   // const handleRouteChange = (url) => {
  //   //   gtag.pageview(url)
  //   // }

  //   router.events.on('routeChangeComplete', handleRouteChange)
  //   return () => {
  //     router.events.off('routeChangeComplete', handleRouteChange)
  //   }
  // }, [router.events])

  return (
    <>
      {/* <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_MEASUREMENT_ID}`}
      /> */}
      {/* <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html:`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js',new Date());

          gtag('config', '${gtag.GA_MEASUREMT_ID}');
          `,
        }} 
      />*/}
      <Layout>
        {getLayout(<Component {...pageProps} />)}
      </Layout>
    </>
  )
}

export default MyApp
