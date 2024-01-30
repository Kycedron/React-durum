import React from 'react';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';

// Устанавливаем модули SwiperCore
SwiperCore.use([Navigation, Pagination]);

const SwiperComponent = () => {
  const swiperParams = {
    spaceBetween: 50,
    slidesPerView: 3,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };

  return (
    <Swiper {...swiperParams}>
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      {/* Добавьте нужное количество слайдов */}
    </Swiper>
  );
};

export default SwiperComponent;
