import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Autoplay } from 'swiper'
import { Container } from './styles'
import { Testimonial } from '~/components/Testimonial'
import { useRouter } from 'next/router'

SwiperCore.use([Navigation, Autoplay])

const Caroussel = () => {
  const elements = [
    {
      description:
        'Dr. David muito grata por dividir conhecimento de forma aberta, divertida e totalmente profissional. Desejo ainda mais sucesso e que ainda mais profissonais tenham acesso ao seu conteúdo, e outras pessoas também, pois é compreensível a todo público.  No meu caso foi essencial, na clinica trabalho com adultos que muitas vezes já vem encaminhados por psiquiatras, já chegam medicados, então foi muito importante conhecer como funcionam as medicações em diversos casos. Como trabalho com sexualidade também, a influência que as medicações podem causar, alterações de desejo e etc, são essenciais para a estruturação do tratamento. Também dou supervisão de estágio na faculdade e passar para os alunos esse conhecimento tem ajudado na formação deles',
      name: 'Ernani Gomes'
    },
    {
      description:
        'Amei dr. David. Como psicóloga acho indispensável aprender sobre farmacologia, neurociencias, traumatologia e outras áreas. Seu curso foi muito completo, passado com leveza por você, bastante esclarecedor e didático. Principalmente por vários fatores que você expôs no curso. É Importante estarmos conscientes e esclarecidos sobre as principais medicações com efeitos psiquiátricos, onde age (região/substância)cada uma delas no cérebro, Quais os efeitos colaterais podem apresentar, Quais desses efeitos de repente são positivos para determinados pacientes. Acredito ser de importância fundamental, pois geralmente o paciente no consultório psicológico ou já está medicado por um psiquiatra ou pode apresentar uma sintomatologia em que  percebamos a necessidade ou a importância de encaminhado ao psiquiatra para uma avaliação/medicação',
      name: 'Adriana Ravazzi Hidalgo'
    },
    {
      description:
        'O curso foi uma excelente experiência. De uma maneira muito didática e bem leve foi tratado um assunto tão complexo. Eu aprendi muito. A forma como foi explicado, eu nunca tinha realizado um curso com essa "pegada". Foi como sentar com um amigo que tem muito conhecimento e ele explicar de forma leve e compreensível aquilo que tenho dúvida e no final ainda dar aquele abraço dizendo: esse é só o começo, mas você está no caminho certo. Não tenho como explicar de outra forma. A divisão dos temas foi sensacional. Estou ansiosa para uma continuação. Só uma observação, senti falta de uma apostila, uma material de apoio, pois gosto de recorrer a ele para ampliar ainda mais meus conhecimentos, é algo que me ajuda a memorizar.',
      name: 'Karla Dutra'
    },
    {
      description:
        'Fiz parte da primeira turma do curso de Psicofármaco do Dr David Sender, assim como acrescentou muito no meu dia a dia profissional, acredito que todo profissional da área da saúde deveria realizar esse curso, que com uma didática clara e criativa tornou muito mais fácil a aprendizagem dessa temática. Sou psicóloga,  e o domínio a cerca da questão farmacológica,  me transformou como profissional, visto que,  me empoderou na relação terapêutica, para desmistificar o uso da medicação e psicoeducar sobre seu funcionamento no cérebro, ficando mais claro para o paciente a necessidade do uso quando indicado pelo psiquiatra. Certamente sou uma profissional mais qualificada e certamente quem o fizer também será.',
      name: 'Luciana Boeira'
    },
    {
      description:
        'Sou uma psicóloga nova na profissão e mais ainda na clínica. Escolher esse curso como aprimoramento profissional não só me rendeu um certificado como me fez enxergar o que de fato é um tratamento interdisciplinar. Hoje sei mais do que o que um antidepressivo/ansiolítico/antipsicótico promete, mas, sei como ele age em diferentes transtornos, e mais ainda, o seu resultado pra cada paciente. A didática excelente, a criatividade então, fenomenal! Compraria uma segunda temporada com certeza! Inclusive, quando será o lançamento!? PA-RA-BÉNS, eu A-M-E-I a experiência ❣️',
      name: 'Rebeca Fonseca de Souza'
    },
    {
      description:
        'Bom dia, dr. David! Tudo bem também! Seu curso foi excepcional! Sua didática e espontaneidade nos impulsiona a querer aprender e nos capacitar cada vez mais! Depois de suas aulas que tive na pós graduação em Juíz de Fora, somado a esse curso, com certeza foi um divisor e águas como enxergo a psiquiatria atualmente e lido com a psicofarmacologia. Hoje, consigo ter um olhar mais amplo e entender melhor as necessidades dos meus pacientes. Muito obrigada por essa oportunidade!!',
      name: 'Thayane Baroni'
    },
    {
      description:
        'Para melhor compreensão sobre a relevância da intervenção medicamentosa quando ela é prescrita pelo profissional da área e pela qualidade de vida e funcionalidade que proporciona ao paciente. Principalmente para aqueles que resistem ir ao psiquiatra e esperam que determinadas categorias deem conta sozinhas do que não podem dar. Desmistificar o uso adequado e eficaz dos psicotrópicos.',
      name: 'Tacya Milenna'
    },
    {
      description:
        'Foi ótimo!! Me deu uma base muito boa e confiança pra entender e discutir sobre medicação com meus pacientes e com outros profissionais. Foi bem didático também a forma de explicar, deu pra entender com facilidade',
      name: 'Ana Luisa Melo'
    }
  ]

  return (
    <Container>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        breakpoints={{
          1368: {
            slidesPerView: 3
          },
          768: {
            slidesPerView: 2
          },
          260: {
            slidesPerView: 1
          }
        }}
        loop
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {elements.map(e => {
          return (
            <SwiperSlide>
              <Testimonial name={e.name} description={e.description} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Container>
  )
}

export default Caroussel
