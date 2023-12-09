'use client'
import React, { useEffect, useState } from 'react'
import style from './style.module.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Card } from '../card'

const items = [
  {
    nome: 'Mirelle Lucena',
    cargo: 'Product Owner',
    depoimento:
      '“Ingressar na Tech Pro Bem foi um divisor de águas para mim. O voluntariado surgiu em um momento que estava precisando colocar muito do que tinha de conhecimento teórico em prática, estava buscando uma oportunidade para melhorar minha comunicação em time e ter cases práticos. Foi um estímulo e um motivador enquanto ainda não estava inserida no mercado de trabalho.”',
  },
  {
    nome: 'Roxane Nayara',
    cargo: 'Analista de Qualidade',
    depoimento:
      'A Tech contribuiu para que meu conhecimento teórico se transformasse em prática. Pude ter contato com uma equipe real e com profissionais da área ao atuar num time ágil como QA Jr voluntária. Desenvolvi muito minhas habilidades analíticas e de comunicação. Sou muito grata a toda equipe por me proporcionar crescer como pessoa e como profissional. Estou muito feliz e grata por todo aprendizado.',
  },
  {
    nome: 'Mirelle Lucena',
    cargo: 'Product Owner',
    depoimento:
      '“Ingressar na Tech Pro Bem foi um divisor de águas para mim. O voluntariado surgiu em um momento que estava precisando colocar muito do que tinha de conhecimento teórico em prática, estava buscando uma oportunidade para melhorar minha comunicação em time e ter cases práticos. Foi um estímulo e um motivador enquanto ainda não estava inserida no mercado de trabalho.”',
  },
  {
    nome: 'Roxane Nayara',
    cargo: 'Analista de Qualidade',
    depoimento:
      'A Tech contribuiu para que meu conhecimento teórico se transformasse em prática. Pude ter contato com uma equipe real e com profissionais da área ao atuar num time ágil como QA Jr voluntária.',
  },
]

function Carousel() {
  const [slidePerView, setSlidePerView] = useState(3)
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setSlidePerView(2)
    }

    if (window.innerWidth >= 768 && window.innerWidth < 1280) {
      console.log(window.innerWidth >= 768 && window.innerWidth < 1280)
      console.log('é menor que 1280?', window.innerWidth < 1280)
      setSlidePerView(2)
    }
    if (window.innerWidth >= 1280) {
      setSlidePerView(3)
    }
  }

  useEffect(() => {
    // Chama a função de redimensionamento ao carregar a página
    handleResize()

    // Adiciona o event listener para redimensionamento
    window.addEventListener('resize', handleResize)

    // Retorna uma função de limpeza para remover o event listener quando o componente é desmontado
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <div className={style.slide}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
        centeredSlides={true} // Define centeredSlides como true para centralizar os slides
        spaceBetween={10} // Espaço entre os slides (opcional)
        slidesPerView={slidePerView} // Quantidade de slides visíveis ao mesmo tempo
        pagination={{ clickable: true }} // Configuração da paginação (opcional)
        loop={true} // Define o loop como verdadeiro para tornar o Swiper infinito
        initialSlide={0} // Define o slide inicial como o segundo slide (índice 1)
        className={style.swiper__slide}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <Card depoiment={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Carousel
