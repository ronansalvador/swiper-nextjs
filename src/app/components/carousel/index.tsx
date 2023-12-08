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

function Carousel() {
  const [slidePerView, setSlidePerView] = useState(3)
  const handleResize = () => {
    if (window.innerWidth >= 1280) {
      console.log('é maior que 1280?', window.innerWidth >= 1280)
      setSlidePerView(3)
    }

    if (window.innerWidth < 768) {
      setSlidePerView(1)
    }

    if (window.innerWidth >= 768 && window.innerWidth < 1280) {
      console.log(window.innerWidth >= 768 && window.innerWidth < 1280)
      console.log('é menor que 1280?', window.innerWidth < 1280)
      setSlidePerView(2)
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
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        // spaceBetween={50}
        // slidesPerView={3}
        // centeredSlides
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
      >
        <SwiperSlide>
          <div className={style.card}>
            <div className={style.details}>
              <h1>Nome1</h1>
              <h2>cargo</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                esse cupiditate ullam enim ut, impedit incidunt eos pariatur
                magni hic repellat est corrupti obcaecati? Quia tempora dolores
                totam molestiae enim!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.card}>
            <div className={style.details}>
              <h1>Nome2</h1>
              <h2>cargo</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                esse cupiditate ullam enim ut, impedit incidunt eos pariatur
                magni hic repellat est corrupti obcaecati? Quia tempora dolores
                totam molestiae enim!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.card}>
            <div className={style.details}>
              <h1>Nome3</h1>
              <h2>cargo</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                esse cupiditate ullam enim ut, impedit incidunt eos pariatur
                magni hic repellat est corrupti obcaecati? Quia tempora dolores
                totam molestiae enim!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.card}>
            <div className={style.details}>
              <h1>Nome4</h1>
              <h2>cargo</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                esse cupiditate ullam enim ut, impedit incidunt eos pariatur
                magni hic repellat est corrupti obcaecati? Quia tempora dolores
                totam molestiae enim!
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Carousel
