import { Box, Flex, Text } from '@chakra-ui/react'

interface ModuleNumberProps {
  name: string
  number: string
}

export const Module = ({ number, name }: ModuleNumberProps) => {
  return (
    <Flex
      display="flex"
      alignItems="center"
      fontSize="1.1rem"
      gap="1rem"
      fontWeight={300}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgColor="primary.blue"
        color="#fff"
        fontWeight={700}
        w="40px"
        h="40px"

        borderRadius="50%"
        transition="0.2s all ease"
        filter="drop-shadow(0px 0px 10px #46bab04a)"
        _hover={{ filter: 'drop-shadow(0px 0px 14px #46bab071)' }}
      >
        {number}
      </Box>
      <Text
        fontWeight={400}
        color="gray.500"
        fontSize={['.95rem', '1.1rem', '1rem', '.96rem', '1rem']}
        maxW={[220, 500, 1000]}
      >
        {name}
      </Text>
    </Flex>
  )
}
