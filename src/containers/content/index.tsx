import { Flex, GridItem, Image, Text, VStack, Grid } from '@chakra-ui/react'
import { Module } from '~/components/ModuleNumber'

export const Content = () => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      pt={['5rem', '5rem']}
      alignItems="center"
      px={['1rem', '1.5rem', '3rem']}
    >
      <Text
        color="primary.blue"
        fontSize="2rem"
        fontWeight="900"
        textAlign="center"
        px={['1rem', '1.5rem', '2.5rem']}
      >
        Como
      </Text>
      <Text fontSize="1.2rem" color="gray.700">
        Essa formação será entregue?
      </Text>
      <Flex
        mt="2rem"
        alignItems="flex-start"
        flexDirection={['column', 'column', 'row']}
        borderRadius="1.5rem 1.5rem .5rem 1.5rem"
        justifyContent="flex-start"
        bgColor="transparent"
        py="2rem"
        gap="1rem"
        px={['2rem', '4rem', '4rem']}
        border="1px #7b7b7b solid"
      >
        <VStack spacing="1.4rem" alignItems="flex-start">
          <Module
            name="Porque os transtornos mentais não são exclusividades da psiquiatria"
            number="1"
          />
          <Module
            name="Será que a sua forma de trabalhar é a correta?"
            number="2"
          />
          <Module
            name="Posso acreditar em todo artigo científico que leio?"
            number="3"
          />
          <Module
            name="Você conhece a Jornada de um psicofármaco em nosso corpo?"
            number="4"
          />
          <Module name="O senhor dos remédios" number="5" />
          <Module
            name="Viagra: A incrível história de um dos remédios mais vendidos do mundo"
            number="6"
          />
          <Module
            name="Quem ganha a corrida: a lebre ou a tartaruga?"
            number="7"
          />
          <Module name="O extra medicamento" number="8" />
          <Module name="Meu efeito colateral favorito" number="9" />
          <Module name="Luz, câmera e meditação" number="10" />
        </VStack>
        <VStack spacing="1.4rem" alignItems="flex-start">
          <Module name="Mario no mundo das medicações" number="11" />
          <Module name="Diário de um dependente" number="12" />
          <Module name="Neuroreceptor era a lei" number="13" />
          <Module name="Miss Simpatia e Miss Parasimpatia" number="14" />
          <Module name="Uma história de superação" number="15" />
          <Module name="A máfia dos psicofármacos" number="16" />
          <Module name="A máfia dos psicofármacos" number="17" />
          <Module name="Padrões ouro na psiquiatria" number="18" />
          <Module name="Al capone O estabilizador de humor" number="19" />
          <Module name="O feitiço de aquiles" number="20" />
        </VStack>
      </Flex>
      <Flex mt="6rem" flexDirection={['column', 'column', 'row']} justifyContent="space-between" alignItems="center" pb="14rem">
        <Image w={["80%", "50%", "50%"]} src="images/bonus.png" />
        <Grid
          templateColumns={[
            'repeat(1, 1fr)',
            'repeat(2, 1fr)',
            'repeat(2, 1fr)'
          ]}
        >
          <GridItem>
            <Image src="images/first-card.png" />
          </GridItem>
          <GridItem>
            <Image src="images/sec-card.png" />
          </GridItem>
          <GridItem>
            <Image src="images/third-card.png" />
          </GridItem>
          <GridItem>
            <Image src="images/card-bonus.png" />
          </GridItem>
        </Grid>
      </Flex>
    </Flex>
  )
}
