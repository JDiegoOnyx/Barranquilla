import React from 'react'
import '../../components/main.css'
import { EffectCoverflow, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import slide_image_1 from "../../assets/img/wallpaperflare.com_wallpaper_1.jpg"
import slide_image_2 from "../../assets/img/wallpaperflare.com_wallpaper_2.jpg"
import slide_image_3 from "../../assets/img/wallpaperflare.com_wallpaper.jpg"

function RankingSlider() {
  return (
    <div className=''>
        <Swiper className='ranking-slider-main'
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={3}
            pagination={{ el:'.swiper-pagination',clickable: true }}
            navigation
            on={{
            slideChange: (swiper) => {
                this.activeIndex = swiper.realIndex;
            },
            touchEnd: (swiper) => {
                this.activeIndex = swiper.realIndex;
            },
            }}
            modules={[EffectCoverflow, Autoplay, Navigation, Pagination, Scrollbar, A11y]}
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 12,
                slideShadows: false,
                scale: 1,
            }}    
            autoplay={{ delay: 5000 }} 
        >        
            <SwiperSlide>   
                <img className='ranking-slider-imagen-tamano' src={slide_image_1}></img>
            </SwiperSlide>
            <SwiperSlide>  
                <img className='ranking-slider-imagen-tamano' src={slide_image_2}></img>
            </SwiperSlide>
            <SwiperSlide>   
                <img className='ranking-slider-imagen-tamano' src={slide_image_3}></img>
            </SwiperSlide>
        </Swiper>
    </div>    
  )
}

export default RankingSlider