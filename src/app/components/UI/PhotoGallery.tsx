"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import Image from "next/image";
import { fadeIn } from "@/utils/motions";
import { myImages } from "@/constants";

export default function PhotoGallery() {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeIn("right", "spring", 0.75, 1)}
        className="w-[75%] lg:w-1/3"
      >
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          {myImages.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                className="rounded-xl"
                loading="lazy"
                src={image}
                alt={`image-${index}`}
                height={400}
                width={400}
                layout="responsive"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </>
  );
}
