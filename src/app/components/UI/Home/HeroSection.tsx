"use client";

import { IconContext } from "react-icons";
import { styles } from "@/app/styles/styles";
import { socialLinks } from "@/constants";
import { assets } from "@/assets";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="  max-w-2xl min-h-screen py-[100px]">
      <div className="flex justify-between container ">
        <div>
          <p className={` ${styles.heroHeadText} `}>
            <span className=" font-algem">Naimur Reza</span>
          </p>
          <div className="text-white/80 text-lg font-medium pl-1 flex items-center gap-2 font-Michroma mt-3">
            Design
            <Image
              src={
                "https://cdn.prod.website-files.com/615d64939fac622a8fc9824e/664d9b44d2905d1b523be92d_spacerix.svg"
              }
              alt="spacerix"
              height={10}
              width={10}
            />
            Development
            <Image
              src={
                "https://cdn.prod.website-files.com/615d64939fac622a8fc9824e/664d9b44d2905d1b523be92d_spacerix.svg"
              }
              alt="spacerix"
              height={10}
              width={10}
            />{" "}
            Branding
          </div>
        </div>

        <div>
          <Image
            className="absolute top-0 left-0 z-[2] w-full h-full"
            src={assets.heroEl}
            alt="logo"
            height={500}
            width={500}
          />
        </div>

        <div className="max-lg:hidden w-[250px] xxl:w-[350px] h-[250px] xxl:h-[350px] absolute top-[5%] blur-[100px] right-[12%] bg-[#3a96ff]/50" />
      </div>
      <Image
        className="absolute bottom-5 right-5 z-[2] w-14"
        src={assets.heroElRight}
        alt="logo"
        height={200}
        width={200}
      />
      <Image
        className="absolute bottom-5 left-5 z-[2] w-40"
        src={assets.heroElLeft}
        alt="logo"
        height={200}
        width={200}
      />
    </div>
  );
};

export default HeroSection;
