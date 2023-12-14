import React from 'react'
import '../../components/main.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Slide1 from './Slide1';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function Slider() {
  return (
    <div>
        <Swiper
            modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
            loop={true}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 6000 }}
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
            <SwiperSlide>
                <Slide1/>              
            </SwiperSlide>
            <SwiperSlide>
                <Slide1/>       
            </SwiperSlide>
            <SwiperSlide>
                <Slide1/>        
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Slider