import React, { useState } from 'react'
import '../../components/main.css'
import llamadoAction from '../../assets/img/llamadoAction.png';
import BotonAction from '../BotonAction/BotonAction';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Slider() {
    const [shouldChangeSlide, setShouldChangeSlide] = useState(false);

  const handleSlideChangeTransitionEnd = (swiper) => {
    if (swiper.isEnd && shouldChangeSlide) {
      swiper.slideTo(0);
      setShouldChangeSlide(false); // Reiniciar el estado después del cambio
    }
  };

  const handleNavigationClick = () => {
    // Lógica específica al hacer clic en el botón de navegación del swiper
    console.log('Botón de navegación clickeado');
    setShouldChangeSlide(true); // Habilitar el cambio de slide al hacer clic en el botón de navegación
  };
    
  
  return (
    <div>
        <Swiper
       
            modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
            loop={true}
            spaceBetween={50}
            slidesPerView={3}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            navigation
        on={{
          slideChange: (swiper) => {
            this.activeIndex = swiper.realIndex;
          },
          touchEnd: (swiper) => {
            this.activeIndex = swiper.realIndex;
          },
        }}
    
    
    >
       

      <SwiperSlide >
        <img src='https://img.freepik.com/vector-gratis/consola-juegos-letras-letrero-neon-fondo-ladrillo_1262-11854.jpg' loading='lazy' alt='Slide 1'/>
      </SwiperSlide>

      <SwiperSlide>
      <img src='https://img.freepik.com/vector-gratis/consola-juegos-letras-letrero-neon-fondo-ladrillo_1262-11854.jpg'loading='lazy' alt='Slide 2'/>
      </SwiperSlide>
      <SwiperSlide>
      <img src='https://img.freepik.com/vector-gratis/consola-juegos-letras-letrero-neon-fondo-ladrillo_1262-11854.jpg' loading='lazy' alt='Slide 3'/>
      </SwiperSlide>
      <SwiperSlide>
      <img src='https://img.freepik.com/vector-gratis/consola-juegos-letras-letrero-neon-fondo-ladrillo_1262-11854.jpg' loading='lazy' alt='Slide 4'/>
      </SwiperSlide>
      <SwiperSlide>
      <img src='https://img.freepik.com/vector-gratis/consola-juegos-letras-letrero-neon-fondo-ladrillo_1262-11854.jpg' loading='lazy' alt='Slide 4'/>
      </SwiperSlide>
      <SwiperSlide>
      <img src='https://img.freepik.com/vector-gratis/consola-juegos-letras-letrero-neon-fondo-ladrillo_1262-11854.jpg' loading='lazy' alt='Slide 4'/>
      
      </SwiperSlide>

    </Swiper>
    
        {/* <div className='slider-main'>
            <div className='slider-icon-left'>
                <button className='slider-selection-button'>
                    back
                </button>
            </div>
            <div className='slider-seccion-1'> 
                <div className='slider-text-title-1'>
                    Sigue las tendencias más importantes
                </div>
                <div className='slider-text-1'>
                    Últimas novedades de la industria tecnológica y de videojuegos
                </div>
                <div className='slider-main-boton-action'>
                    <BotonAction/>
                </div>
            </div>
            <div className='slider-seccion-2'>
                <img className='slider-img' src={llamadoAction}/>
            </div>
            <div className='slider-icon-right'>
                <button className='slider-selection-button'>
                    next
                </button>
            </div>
        </div>
        <div className='slider-selection'>
            <button className='slider-selection-button'>O</button>
            <button className='slider-selection-button'>O</button>
            <button className='slider-selection-button'>O</button>
        </div>          */}
    </div>
  )
}

export default Slider