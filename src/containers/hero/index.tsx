import { Flex, Heading, Image, Link, Text } from '@chakra-ui/react'
import { SolidButton } from '~/components/Buttons/SolidButton'

export const Hero = () => {
  return (
    <Flex
      alignItems={['center', 'center', 'flex-start']}
      flexDirection="column"
      justifyContent={[
        'flex-start',
        'flex-start',
        'center',
        'center',
        'center'
      ]}
      h="100%"
      minH={['80vh', '80vh', '90vh']}
      maxW="800"
      px={['.5rem', '1.5rem', '6rem']}
      textAlign={['center', 'center', 'inherit']}
      gap=".5rem"
    >
      <Image
        src="images/logo.svg"
        w={['20%', '30%']}
        mt={['1rem', '1rem', 0]}
      />
      <Heading
        color="primary.orange"
        pt={['2rem', '2rem']}
        fontSize={['1.5rem', '1.6rem', '1.8rem']}
      >
        Seja uma profissional de saúde que sabe conduzir pacientes em uso de
        psicofármacos de forma clara, eficiente e segura
      </Heading>
      <Text  color="gray.500" fontSize={['1rem', '1.1rem', '1.1rem']}>
        Entenda de uma vez por todas os efeitos dos psicofármacos e pare de
        perder noites de sono pensando se a sua conduta foi ou não correta.
        Tenha o domínio e a segurança nas suas decisões clínicas sobre a maior
        parte dos pacientes psiquiátricos em seu consultório de psicologia.
      </Text>

      <SolidButton
        minW={['100%', '70%']}
        mt={['.5rem', '1rem', '1.8rem']}
        fontSize={['.9rem', '1rem']}
        px={['1rem']}
        py={['1.5rem', '1.8rem']}
      >
        EU QUERO SER UMA  PROFISSIONAL MELHOR
      </SolidButton>
    </Flex>
  )
}
