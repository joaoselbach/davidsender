import { Button as ChakraButton, Image } from '@chakra-ui/react'
import { ReactNode } from 'react'


interface ButtonProps {
  children: ReactNode
  fontSize: any
  w?: any
  mt?: any
  px: any
  py: any
}

export const BuyButton = ({ children, fontSize, w, mt, py, px }: ButtonProps) => {
  return (
    <ChakraButton
      px={px}
      py={py}
      w={w}
      minW={["100%", "40%"]}

      mt={mt}
      fontSize={fontSize}
      bgColor="primary.blue"
      textTransform="uppercase"
      gap=".5rem"
      color="gray.50"
      alignItems="center"
      fontWeight="bold"
      transition="0.2s all ease"
      _hover={{ filter: 'drop-shadow(0px 0px 15px #1fb2ba6c)' }}
      _active={{ opacity: 0.9 }}
      _focus={{ border: 'none' }}
    >
      {children}
    </ChakraButton>
  )
}
