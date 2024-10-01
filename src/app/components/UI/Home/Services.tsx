"use client";

import React from "react";
import CountUp from "react-countup";
import { styles } from "@/app/styles/styles";
import PhotoGallery from "../PhotoGallery";
import Image from "next/image";
import { getAssetAsBlob } from "node:sea";
import { assets } from "@/assets";

const Services = () => {
  return (
    <>
      <div id="services" className="mt-20">
        <div className="grid grid-cols-12">
          <div className="relative  overflow-hidden col-span-3">
            <Image
              className="h-full w-full inline-block"
              src={assets.bioWhiteImage}
              height={350}
              width={350}
              alt="bio-white-image"
            />
            <Image
              className="w-full h-full object-contain absolute top-0 left-0 z-[3] brightness-110 "
              src={assets.anik}
              height={300}
              width={300}
              alt="bio-white-image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
