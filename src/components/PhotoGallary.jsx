import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import "./styles.css";

// import required modules
import { EffectCards } from "swiper";

export default function PhotoGallery() {
  const images = [
    "https://i.ibb.co/qj9RLzg/1679157285497.jpg",
    "https://i.ibb.co/gtxCXXc/IMG-6813.jpg",
  ];
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper lg:w-1/3 w-[80%]">
        <SwiperSlide>Slide 1</SwiperSlide>
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img className="rounded-lg" src={image} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
