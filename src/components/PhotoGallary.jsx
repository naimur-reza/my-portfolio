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
    "https://i.ibb.co/fC163x1/me.jpg",
    "https://i.ibb.co/YNkyfNF/hike.jpg",
    "https://i.ibb.co/HzNXktP/bike.jpg",
    "https://i.ibb.co/5BrGfZp/stand.jpg",
  ];
  return (
    <>
      <motion.div
        variants={fadeIn("right", "spring", 0.75, 1)}
        className="w-[75%] lg:w-1/3 ">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper ">
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                loading="lazy"
                className="rounded-lg object-cover "
                src={image}
                alt="image"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </>
  );
}
