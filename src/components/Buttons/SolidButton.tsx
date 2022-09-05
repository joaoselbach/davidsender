import { Button as ChakraButton, Image, Link } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  fontSize: any
  w?: any
  mt?: any
  px: any
  py: any
  minW?: any
}

export const SolidButton = ({
  children,
  fontSize,
  w,
  mt,
  py,
  minW,
  px
}: ButtonProps) => {
  return (
    <Link
      w="100%"
      href="#buy"
      _hover={{ textDecoration: 'none' }}
      _active={{ textDecoration: 'none' }}
    >
      <ChakraButton
        px={px}
        py={py}
        w={w}
        mt={mt}
        minW={minW}
        fontSize={fontSize}
        bgColor="primary.orange"
        textTransform="uppercase"
        gap=".5rem"
        color="#fff"
        alignItems="center"
        fontWeight="bold"
        transition="0.2s all ease"
        _hover={{ filter: 'drop-shadow(0px 0px 12px #f69c274b)' }}
        _active={{ opacity: 0.9 }}
        _focus={{ border: 'none' }}
      >
        {children}
      </ChakraButton>
    </Link>
  )
}
