import { Flex, Text, Heading, Highlight, Image, Link } from '@chakra-ui/react'
import { FrequentQuestions } from '~/components/Accordion'

export const Faq = () => {
  return (
    <Flex
      id="buy"
      flexDirection="column"
      justifyContent="center"
      pt={['2rem', '3rem']}
      alignItems="center"
      px={['1rem', '1.5rem', '3rem']}
    >
      <Heading color="primary.blue" textAlign="center" fontWeight="900">
        Perguntas frequentes
      </Heading>

      <Flex
        mt="4rem"
        alignItems={['center', 'center', 'flex-start']}
        flexDirection="column"
        textAlign={['inherit', 'inherit', 'inherit']} 
      >
        <FrequentQuestions title="Para quem é essa formação?">
          Psicólogas e profissionais de saúde em geral
        </FrequentQuestions>
        <FrequentQuestions title="Quando começam as aulas?">
          Imediatamente. Você recebe o acesso por e-mail e já pode começar a
          fazer o curso. As aulas são gravadas e você pode acessar a plataforma
          do curso livremente.
        </FrequentQuestions>
        <FrequentQuestions title="Quanto tempo vou poder acessar o curso?">
          Você terá acesso por 1 ano.
        </FrequentQuestions>
        <FrequentQuestions title="Quanto tempo leva para terminar o curso?">
          Depende. O curso tem 20 módulos que você pode assistir maratonando ou
          no seu tempo. Ao longo do ano vamos ter os encontros de tutoria e
          algumas surpresas.
        </FrequentQuestions>
        <FrequentQuestions title="E se eu me arrepender da compra?">
          Você tem 7 dias de garantia incondicional. Basta solicitar à nossa
          equipe que cancelamos de imediato dentro do período de garantia
        </FrequentQuestions>
        <FrequentQuestions title="Preciso de computador para fazer o curso?">
          Não. Você pode assistir às aulas pelo smartphone ou tablet acessando a
          plataforma que disponibilizamos.
        </FrequentQuestions>
        <FrequentQuestions title="Qual o horário das aulas?">
          O curso é online com aulas gravadas e você pode assistir a hora que
          quiser e quantas vezes quiser. Além dessas aulas do curso, você tem um
          bônus de tutoria de consultório temática, esse momento é ao vivo com
          muita interação.
        </FrequentQuestions>
        <FrequentQuestions title="O que é a tutoria de consultório temática?">
          É um bônus dessa turma do curso que vamos te entregar gratuitamente.
          Os encontros serão ao vivo e vamos pré-selecionar 3 casos reais, que
          vocês estão trabalhando, para discutir a luz da psicofarmacologia com
          muita troca e interação entre os profissionais que estiverem conosco.
        </FrequentQuestions>
      </Flex>
    </Flex>
  )
}
