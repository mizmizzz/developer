import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,FreeMode } from 'swiper/modules'; // Updated imports for Swiper v10+
import 'swiper/css';
import 'swiper/css/free-mode';
// import 'swiper/css/pagination';

import './SpiritsSwiper.scss';

const SpiritsSwiper = () => {
  return (
    <div className={"spiritsSwiperWrap"}>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={0}
        freeMode={true}
        loop={true}

        speed={7000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Autoplay,FreeMode]} // Import FreeMode and Pagination modules
        className={"spiritsSwiper"}
      >
        <SwiperSlide>Sensitive</SwiperSlide>
        <SwiperSlide>Publishing</SwiperSlide>
        <SwiperSlide>Communicating</SwiperSlide>
        <SwiperSlide>Frontend</SwiperSlide>
        <SwiperSlide>Cooperative</SwiperSlide>
        <SwiperSlide>Backend</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SpiritsSwiper;
