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
            <h1 className="text-3xl font-algem">
              Digital Designer + Creative Developer
            </h1>
            <p className="text-sm ">
              Carl is an award winning designer specialised in crafting
              exceptional web experiences and interactions. His passion for
              design and high level of craftsmanship have earned him a
              reputation as a go-to guy for delivering excellent work. He has
              worked with a wide range of brands across the globe, producing
              websites that compete with industry leaders and exceed client
              expectations.{" "}
            </p>
            <p>Based In Wellington, New ZEaland</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
