import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import SectionWrapper from "../hoc/SectionWrapper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import "./styles.css";

// import required modules
import { EffectCards } from "swiper";
import { fadeIn } from "../utils/motion";

export default function PhotoGallery() {
  const images = [
    "https://i.ibb.co/qj9RLzg/1679157285497.jpg",
    "https://i.ibb.co/gtxCXXc/IMG-6813.jpg",
  ];
  return (
    <>
      <motion.div
        variants={fadeIn("right", "spring", 0.5, 1)}
        className="w-[75%] lg:w-1/3 ">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper ">
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img className="rounded-lg" src={image} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </>
  );
}
