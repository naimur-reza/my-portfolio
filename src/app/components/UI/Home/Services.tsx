import React from "react";
import Image from "next/image";
import { assets } from "@/assets";

const Services = () => {
  return (
    <>
      <div id="services" className="  min-h-screen flex items-center ">
        <div className="flex flex-col lg:flex-row items-center  gap-8 ">
          <div className="relative  overflow-hidden ">
            <Image
              className="w-96 h-full   inline-block overflow-hidden  "
              src={assets.bioWhiteImage}
              height={350}
              width={350}
              alt="bio-white-image"
            />
            <Image
              className="w-96 h-full object-contain absolute top-0 left-0 z-[3] brightness-110 mix-blend-multiply"
              src={assets.anik}
              height={350}
              width={350}
              alt="bio-white-image"
            />
          </div>

          <div className=" max-w-xl text-white space-y-5">
            <h1 className="text-xl lg:text-3xl font-algem">
              Digital Designer + Creative Developer
            </h1>
            <p className="text-sm ">
              Naimur Reza is a skilled full stack developer specializing in
              building dynamic and responsive web applications. With expertise
              in modern JavaScript frameworks, he has earned a reputation for
              delivering high-quality, scalable solutions that enhance user
              experience. Naimur has worked with diverse clients globally,
              creating projects that stand out in performance and design,
              consistently exceeding client expectations.
            </p>
            <p>Based In Bangladesh</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
