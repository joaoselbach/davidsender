import { Flex, Text, Heading, Highlight, Image, Link } from '@chakra-ui/react'
import { BuyButton } from '~/components/Buttons/BuyButton'
import { Icon } from '~/components/Icon'

import { FaCheckCircle } from 'react-icons/fa'

export const Offer = () => {
  return (
    <Flex
      id="buy"
      flexDirection="column"
      justifyContent="center"
      pt={['15rem', '5rem']}
      alignItems="center"
      px={['1rem', '1.5rem', '3rem']}
      minH={['120vh', '150vh', '150vh']}
    >
      <Heading color="#fff" letterSpacing="5px" fontWeight="900">
        Tudo isso
      </Heading>

      <Flex flexDir="column" textAlign="center">
        <Text
          fontWeight={700}
          color="#fff"
          textShadow="0px 0px 10px rgba(255, 255, 255, 0.7)"
        >
          POR APENAS 12x
        </Text>
        <Text fontWeight={900}>
          <Highlight
            query="R$89,70"
            styles={{
              color: '#46BAB1',
              fontWeight: '900',
              fontSize: '2.2rem'
            }}
          >
            DE R$89,70 OU
          </Highlight>{' '}
        </Text>
        <Flex flexDirection="column">
          <Highlight
            query="R$897,00"
            styles={{
              color: '#46BAB1',
              fontWeight: '900',
              fontSize: '4.2rem'
            }}
          >
            R$897,00
          </Highlight>{' '}
          <Text color="gray.50" fontSize="1.2rem">
            Á VISTA
          </Text>
        </Flex>
        <Flex mt="1rem" alignItems="center" gap=".3rem">
          <Icon fontSize="1.2rem" fill="#fff" icon={FaCheckCircle} />
          <Text color="gray.100" fontWeight={700}>
            Acesso completo ao curso e os bônus
          </Text>
        </Flex>
        <Flex mt="1rem" alignItems="center" gap=".3rem">
          <Icon fontSize="1.2rem" fill="#fff" icon={FaCheckCircle} />
          <Text color="gray.100" fontWeight={700} textAlign="left">
            EXPERIMENTE DURANTE 7 DIAS, SE NÃO GOSTAR TENHA SEU REEMBOLSO
          </Text>
        </Flex>
      </Flex>
      <Link
        display="flex"
        alignItems="center"
        justifyContent="center"
        w="100%"
        href="https://pay.greenn.com.br/9263/?b_id=6185&ch_id=1845"
        _active={{ textDecoration: 'none' }}
        _hover={{ textDecoration: 'none' }}
      >
        <BuyButton
          w={['100%', '50%']}
          mt="4rem"
          px="2.5rem"
          py="2rem"
          fontSize="1rem"
        >
          MATRICULAR AGORA
        </BuyButton>
      </Link>

      <Image mt="4rem" src="images/garantia.png" />
    </Flex>
  )
}
