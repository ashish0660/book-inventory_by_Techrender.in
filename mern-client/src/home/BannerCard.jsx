import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import '../home/BannerCard.css';

// import required modules
import { Autoplay, EffectCards } from 'swiper/modules';

const BannerCard = () => {
  return (
    <div className='banner'><Swiper
    effect={'cards'}
    grabCursor={true}
    modules={[Autoplay,EffectCards]}
    className="mySwiper"
    autoplay={{ delay: 3000 }}
  >
    <SwiperSlide></SwiperSlide>
    <SwiperSlide></SwiperSlide>
    <SwiperSlide></SwiperSlide>
    <SwiperSlide></SwiperSlide>
    <SwiperSlide></SwiperSlide>
    <SwiperSlide></SwiperSlide>
    <SwiperSlide></SwiperSlide>
    <SwiperSlide></SwiperSlide>
    <SwiperSlide></SwiperSlide>
  </Swiper></div>
  )
}

export default BannerCard