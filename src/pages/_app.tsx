import { AppProps } from 'next/app'
import { Box, ChakraProvider } from '@chakra-ui/react'
import SimpleReactLightbox from 'simple-react-lightbox'

import theme from '../styles/theme'

import '../../node_modules/swiper/swiper-bundle.min.css'
import '../../node_modules/swiper/swiper.min.css'
import 'react-awesome-lightbox/build/style.css'
import Script from 'next/script'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
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
      <Script strategy="lazyOnload">{`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1017784671692933');
fbq('track', 'PageView');
fbq('trackCustom', 'ViuPGVendas');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=1017784671692933&ev=PageView&noscript=1"`}</Script>
      <ChakraProvider theme={theme}>
        <SimpleReactLightbox>
          <Component {...pageProps} />
        </SimpleReactLightbox>
      </ChakraProvider>
    </>
  )
}

export default MyApp
