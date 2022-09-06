import { Avatar, Divider, Flex, Image, Text, VStack } from '@chakra-ui/react'

interface TestimonialProps {
  name: string
  description: string
}

export const Testimonial = ({ description, name }: TestimonialProps) => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="space-between"
      p={['1.2rem', '1.3rem']}
      maxW={800}
      minH={625}
      gap="2rem"
      borderRadius="1.5rem 1.5rem .5rem 1.5rem"
      bgColor="transparent"
      border="1px #7b7b7b solid"
    >
      <VStack alignItems="flex-start" textAlign="left" spacing=".2rem">
        <Image w="2rem" src="/images/quote-up.svg" />
        <Text fontWeight="300" color="gray.500">{description}</Text>
        <Image alignSelf="flex-end" w="2rem" src="/images/quote-down.svg" />
      </VStack>

      <Flex gap="1rem" justifyContent="center" textAlign="center" pt="1rem">
        <Text fontSize="1.2rem" color="gray.700" fontWeight="500">{name}</Text>
      </Flex>
    </Flex>
  )
}
