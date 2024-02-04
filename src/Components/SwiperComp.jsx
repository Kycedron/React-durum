import React from 'react';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore from 'swiper/core';

// Устанавливаем модули SwiperCore
SwiperCore.use([Navigation, Pagination]);

const SwiperComponent = () => {
  const swiperParams = {
    spaceBetween: 50,
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };

  return (
    <Swiper {...swiperParams}>
      <SwiperSlide>
        <div className="slide-content">
          <img
            src="https://i.pinimg.com/564x/4b/a3/22/4ba32282ee1ccff5de26aad11ed66eff.jpg"
            alt="Slide 1"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-content">
          <img
            src="https://i.pinimg.com/564x/a4/82/25/a48225c31181b2a6973a56c7c62a1b75.jpg"
            alt="Slide 2"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-content">
          <img
            src="https://i.pinimg.com/564x/51/b5/2f/51b52f3efb1c3928613573e00c1d0659.jpg"
            alt="Slide 3"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </SwiperSlide>
      {/* Добавьте другие слайды с похожей структурой */}
      <div className="swiper-pagination"></div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
      <div className="swiper-scrollbar"></div>
    </Swiper>
  );
};

export default SwiperComponent;
