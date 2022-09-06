import { Flex, Image, Text } from '@chakra-ui/react'
import { SolidButton } from '~/components/Buttons/SolidButton'

export const Idea = () => {
  return (
    <Flex
      h="100%"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      px={['.5rem', '1.5rem', '6rem', '6rem', '6rem', '15rem']}
      pt={[null, null, null, null, null, "9rem"]}
      maxW={['1000px', '1000px', '1000px', '1000px', '1000px', '1200px']}
      minH="100vh"
      marginLeft="auto"
    >
      <Image
        display={['none', 'none', 'block', 'block', 'block', 'none']}
        w="60%"
        src="/images/path.png"
      />
      <Text
        color="gray.500"
        w="100%"
        maxW={[220, 360, 1000]}
        pt={['13rem', '8rem', '2rem']}
        textAlign="justify"
        align-self="flex-end"
        marginLeft="auto"
      >
        Foi então que surgiu a{' '}
        <span
          style={{ color: '#F69D27', fontWeight: '900', fontSize: '1.2rem' }}
        >
          IDEIA
        </span>{' '}
        de montar uma{' '}
        <span style={{ color: '#383838', fontWeight: '700' }}>
          formação de Psicofarmacologia{' '}
        </span>
        para psicólogas e outros profissionais da saúde, afinal, estudo e aplico
        isso há mais de 10 anos (em mais de 10000 atendimentos), o que me trouxe
        um expertise e enorme segurança sobre essa área, além de ser um
        professor inteiramente apaixonado por ensinar especificamente esse
        nicho.
      </Text>
      <br />
      <Text color="gray.500" textAlign="justify" marginLeft="auto">
        De forma que sempre é um enorme prazer preparar outros profissionais
        para lidar com essas situações tão delicadas que exigem um conhecimento
        profundo, correto e ético sobre o assunto O principal e mais comum
        elogio que recebo de alunos é habilidade de transformar assuntos densos
        e complexos em simples, leves e práticos. O intuito da formação é
        entregar da forma mais clara e dinâmica para que esses conceitos sejam
        aplicados rapidamente e com maestria, são anos de estudos e práticas
        muito bem condensados para que todos tenham um entendimento total sobre
        o assunto.
      </Text>
      <SolidButton
        minW={['100%', '100%']}
        mt={['2rem', '1rem', '1.8rem']}
        fontSize={['.9rem', '1rem']}
        px={['1rem']}
        py={['1.5rem', '1.8rem']}
      >
        EU QUERO CONDUZIR AS <br /> SESSÕES COM SEGURANÇA
      </SolidButton>
    </Flex>
  )
}
