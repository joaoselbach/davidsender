import Head from 'next/head'

import { Box, Icon, Text } from '@chakra-ui/react'
import { Hero } from '~/containers/hero'

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
            '/images/bg-desktop-lg.png'
          ]}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          h="100%"
          minH="100vh"
        >
          <Hero />
        </Box>
        {/* <Box
          backgroundImage={[
            '/images/bg-how-md.png',
            '/images/bg-how-md.png',
            '/images/bg-how-md.png'
          ]}
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          h="100%"
          minH="115vh"
        >
          <Hero />
        </Box>
        <Box
          backgroundImage={[
            '/images/bg-idea-md.png',
            '/images/bg-idea-md.png',
            '/images/bg-idea-md.png'
          ]}
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          h="100%"
          minH="100vh"
        >
          <Hero />
        </Box> */}
      </Box>
    </>
  )
}

export default Home
