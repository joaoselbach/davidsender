import Head from 'next/head'

import { Box, Icon, Text } from '@chakra-ui/react'
import { Hero } from '~/containers/hero'
import { Explain } from '~/containers/explain'
import { Idea } from '~/containers/idea'
import { Testimonials } from '~/containers/testimonials'
import { Content } from '~/containers/content'
import { Offer } from '~/containers/offer'
import { Faq } from '~/containers/faq'

export const Home = () => {
  return (
    <>
      <Head>
        <title>David Sender</title>
      </Head>
      <Box as="main">
        <Box
          backgroundImage={[
            '/images/bg-desktop-mobile.png',
            '/images/bg-desktop-md.png',
            '/images/bg-desktop-md.png',
            '/images/bg-desktop-md.png',
            '/images/bg-desktop-lg.png'
          ]}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          h="100%"
          minH="120vh"
        >
          <Hero />
        </Box>
        <Box
          backgroundImage={[
            '/images/bg-how-mobile-test.png',
            '/images/bg-how-md-test.png',
            '/images/bg-how-md-test.png',
            '/images/bg-how-md-test.png',
            '/images/bg-how-md-test.png',
            '/images/bg-how-lg-test.png'
          ]}
          mt="-.5rem"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          h="100%"
          minH="80vh"
        >
          <Explain />
        </Box>
        <Box
          backgroundImage={[
            '/images/bg-idea-mobile.png',
            '/images/bg-idea-md.png',
            '/images/bg-idea-md.png',
            '/images/bg-idea-md.png',
            '/images/bg-idea-md.png',
            '/images/bg-idea-lg-test.png'
          ]}
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          h="100%"
          minH={['110vh', '120vh', '110vh']}
        >
          <Idea />
        </Box>
        <Box
          backgroundImage={[
            '/images/bg-testimonial-mobile.png',
            '/images/testimonials-test.png',
            '/images/testimonials-test.png'
          ]}
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          h="100%"
          minH="100vh"
        >
          <Testimonials />
        </Box>

        <Box
          backgroundImage={[
            '/images/bg-mobile-base.png',
            '/images/modules-test-2.png',
            '/images/modules-test-2.png',
            '/images/modules-test-2.png',
            '/images/modules-test-2.png',
          ]}
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          h="100%"
          minH="100vh"
        >
          <Content />
        </Box>
        <Box
          backgroundImage={[
            '/images/bg-offer-mobile-test.png',
            '/images/bg-buy-test.png',
            '/images/bg-buy-test.png'
          ]}
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          h="100%"
          mt="-14rem"
          zIndex="10"
          minH={['150vh', '160vh', '170vh']}
        >
          <Offer />
        </Box>
        <Box
          backgroundImage={[
            'images/bg-faq-mobile.png',
            '/images/bg-faq-test.png',
            '/images/bg-base-test.png'
          ]}
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          h="100%"
          minH="80vh"
        >
          <Faq />
        </Box>
      </Box>
    </>
  )
}

export default Home
