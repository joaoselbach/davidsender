import { Flex, Heading, Text } from '@chakra-ui/react'

export const Explain = () => {
  return (
    <Flex flexDirection="column" maxW="800" px={['1rem', '1.5rem', '6rem']}>
      <Heading color="primary.red" letterSpacing="5px" fontWeight="900">
        Como
      </Heading>
      <Text
        color="gray.700"
        fontWeight="700"
        fontSize="1.2rem"
        maxW={[240, 300, 600]}
      >
        Conduzir pacientes em uso de psicofármacos de forma clara, eficiente e
        segura?
      </Text>

      <Text
        color="gray.500"
        mt="2rem"
        maxW={[200, 300, 600]}
        textAlign="justify"
      >
        Durante anos recebo diversas mensagens de psicólogos que têm medo de
        conduzir pacientes que fazem uso de psicotrópicos. Todos alegam que após
        a consulta sempre ficam preocupadas com as orientações que deram por não
        ter domínio sobre o assunto
      </Text>
      <Text color="gray.500" mt="2rem" textAlign="justify">
        Fui pesquisar a fundo e descobri que existe uma brecha enorme no ensino
        tradicional de psicologia, que aprofunda os conhecimentos de
        psicofarmacologia para esses profissionais que fatalmente lidarão com
        essa temática.{' '}
        <span style={{ color: '#6b6b6b', fontWeight: '700' }}>
          O que prejudica sua qualidade técnica
        </span>
        . <br /> <br />
        Continuei pesquisando formas de como meus colegas poderiam ter acesso a
        esses estudos e a cada pesquisa minha preocupação só aumentava, pois
        para ter acesso a esses conteúdos seria necessário um investimento de
        tempo e dinheiro incompatíveis com a realidade da maioria de nós
        Construir um consultório, encher uma agenda e ter uma renda alta e
        estável, não é uma tarefa fácil. A maioria de nós precisa escolher entre
        cursos de capacitação, marketing, supervisão, além dos próprios
        atendimentos. Tornando muito difícil se dedicar a estudar assuntos que
        não temos muita propriedade. <br /> <br />
        Mas eu não podia ficar parado, afinal, nós que cuidamos da saúde mental
        temos uma responsabilidade enorme em nossas mãos, transformamos vidas
        através das nossas conduções. <br /> <br /> Porém, em anos de busca, não
        consegui encontrar nenhum material que por sentir uma grande necessidade
        de ajudar esses profissionais a potencializarem suas capacidades de
        transformação orientando e conduzindo os pacientes da forma mais
        completa, porém não estava enxergando uma forma de entregar esses
        conteúdos.
      </Text>
    </Flex>
  )
}
