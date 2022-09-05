import Head from 'next/head'

import { Box, Icon, Text } from '@chakra-ui/react'
import { Hero } from '~/containers/hero'
import { Explain } from '~/containers/explain'
import { Idea } from '~/containers/idea'
import { Testimonials } from '~/containers/testimonials'

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
            '/images/bg-how-mobile.png',
            '/images/bg-how-md.png',
            '/images/bg-how-md.png'
          ]}
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          h="100%"
          minH="115vh"
        >
          <Explain />
        </Box>
        <Box
          backgroundImage={[
            '/images/testidea.png',
            '/images/bg-idea-md.png',
            '/images/bg-idea-md.png'
          ]}
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          h="100%"
          minH="120vh"
        >
          <Idea />
        </Box>
        <Box
          backgroundImage={[
            '/images/bg-testimonial-mobile.png',
            '/images/bg-testimonials-md.png',
            '/images/bg-testimonials-md.png'
          ]}
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          h="100%"
          minH="100vh"
        >
          <Testimonials />
        </Box>
      </Box>
    </>
  )
}

export default Home
