import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";
import Slider from "./Slider";
function Carusel() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        loop={true}
        mousewheel={true}
        keyboard={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard,Autoplay]}
        className="mySwiper h-[80vh]"
      >
        <SwiperSlide>
          <Slider></Slider>
        </SwiperSlide>
        <SwiperSlide>
          <Slider></Slider>
        </SwiperSlide>
        <SwiperSlide>
          <Slider></Slider>
        </SwiperSlide>
        <SwiperSlide>
          <Slider></Slider>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Carusel;
