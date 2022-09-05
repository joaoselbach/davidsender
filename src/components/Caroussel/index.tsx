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
        'Sou uma psicóloga nova na profissão e mais ainda na clínica. Escolher esse curso como aprimoramento profissional não só me rendeu um certificado como me fez enxergar o que de fato é um tratamento interdisciplinar. Hoje sei mais do que o que um antidepressivo/ansiolítico/antipsicótico promete, mas, sei como ele age em diferentes transtornos, e mais ainda, o seu resultado pra cada paciente. A didática excelente, a criatividade então, fenomenal! Compraria uma segunda temporada com certeza! Inclusive, quando será o lançamento!? PA-RA-BÉNS, eu A-M-E-I a experiência ❣️',
      name: 'Rebeca Fonseca de Souza',
    },
    {
      description:
        'Para melhor compreensão sobre a relevância da intervenção medicamentosa quando ela é prescrita pelo profissional da área e pela qualidade de vida e funcionalidade que proporciona ao paciente. Principalmente para aqueles que resistem ir ao psiquiatra e esperam que determinadas categorias deem conta sozinhas do que não podem dar. Desmistificar o uso adequado e eficaz dos psicotrópicos.',
      name: 'Tacya Milenna',
    },
    {
      description:
        'Foi ótimo!! Me deu uma base muito boa e confiança pra entender e discutir sobre medicação com meus pacientes e com outros profissionais. Foi bem didático também a forma de explicar, deu pra entender com facilidade',
      name: 'Ana Luisa Melo',
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
              <Testimonial
                name={e.name}
                description={e.description}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Container>
  )
}

export default Caroussel
