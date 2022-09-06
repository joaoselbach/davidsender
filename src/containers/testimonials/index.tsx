import { Flex, Image, Text } from '@chakra-ui/react'
import { SolidButton } from '~/components/Buttons/SolidButton'
import Caroussel from '~/components/Caroussel'

export const Testimonials = () => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      minH="100vh"
      pt={["17rem", "17rem"]}
      alignItems="center"
      pb="4rem"
      px={['1rem', '1.5rem', '3rem']}
    >
      <Text
        color="primary.blue"
        fontSize="2rem"
        fontWeight="900"
        textAlign="center"
        px={['1rem', '1.5rem', '2.5rem']}
      >
        Depoimentos
      </Text>
      <Text fontSize="1.2rem" color="gray.700" fontWeight={700}>de alunas da formação:</Text>
      <Caroussel />
    </Flex>
  )
}
