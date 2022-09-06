import { AppProps } from 'next/app'
import { Box, ChakraProvider } from '@chakra-ui/react'
import SimpleReactLightbox from 'simple-react-lightbox'

import theme from '../styles/theme'

import '../../node_modules/swiper/swiper-bundle.min.css'
import '../../node_modules/swiper/swiper.min.css'
import 'react-awesome-lightbox/build/style.css'
import Script from 'next/script'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()

  useEffect(() => {
    import('react-facebook-pixel')
      .then(x => x.default)
      .then(ReactPixel => {
        ReactPixel.init('1017784671692933')
        ReactPixel.pageView()

        router.events.on('routeChangeComplete', () => {
          ReactPixel.pageView()
        })
      })
  }, [router.events])

  return (
    <>
      <Script
        strategy="lazyOnload"
        async
        src={`https://www.googletagmanager.com/gtag/js?id=AW-444071114`}
      />
      <Script strategy="lazyOnload">{`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  
  gtag('config', 'AW-444071114');`}</Script>

      <ChakraProvider theme={theme}>
        <SimpleReactLightbox>
          <Component {...pageProps} />
        </SimpleReactLightbox>
      </ChakraProvider>
    </>
  )
}

export default MyApp
