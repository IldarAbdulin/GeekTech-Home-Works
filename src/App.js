import React from 'react';

import firstImg from './assets/1.jpg'
import secondImg from './assets/2.webp'
import thirdImg from './assets/3.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

function App() {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
    >
      <SwiperSlide>
        <div>
          <img src={firstImg} />
          <h1>Slide 1</h1>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div>
          <img src={secondImg} />
          <h1>Slide 2</h1>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div>
          <img src={thirdImg} />
          <h1>Slide 3</h1>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default App;
