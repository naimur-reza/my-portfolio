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
  const images = [1, 2, 3, 4];
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
                src={`../../src/assets/photoGallery/${image}.jpg`}
                alt="image"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </>
  );
}
