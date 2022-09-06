import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    gray: {
      900: '#030303',
      800: '#353535',
      700: '#1B1F23',
      600: '#787878',
      500: '#6f6d6d',
      400: '#a1a1a1',
      300: '#D9D9D9',
      50: '#fff'
    },
    primary: {
      orange: '#F69D27',
      blue: '#46BAB1',
      red: '#E62039',
    }
  },
  fonts: {
    heading: 'Nunito',
    body: 'Nunito'
  },
  styles: {
    global: {
      body: {
        bg: '#fff',
        color: 'gray.400'
      },
      html: {
        scrollBehavior: 'smooth',
        webkitFontSmoothing: 'antialiased',

        '&::-webkit-scrollbar': {
          width: '4px'
        },
        '&::-webkit-scrollbar-track': {
          background: '#2b2b2b'
        },
        '&::-webkit-scrollbar-thumb': {
          background: '#C2AD60',
          borderRadius: '24px'
        },
        '::-webkit-scrollbar-thumb:hover': {
          background: '#c2b27a'
        }
      }
    }
  }
})

export default theme
