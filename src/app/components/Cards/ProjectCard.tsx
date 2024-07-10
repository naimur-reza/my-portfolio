"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motions";
import Image from "next/image";

const ProjectCard = ({ index, name, image, type }: any) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 1, 0.5)}>
      <div
        style={{ opacity: 1, transition: "all 0.5s " }}
        key={index}
        className="rounded-[4rem] overflow-hidden  
        group cursor-pointer 
        border-2 border-transparent hover:border-[#56ccf2] border-opacity-40 
        inline-block relative
        max-w-[32rem]
        w-full h-[10rem] md:h-[17rem] lg:h-[20rem] "
      >
        <Image
          className="opacity-50"
          objectFit="cover"
          src={image}
          fill
          alt={name}
        />

        <div className="absolute   inset-0 bg-gradient-to-bl from-slate-900 to-stone-900 opacity-40"></div>

        <div className="absolute  bottom-0 left-0 p-3 md:p-8">
          <div
            style={{ transition: "all 0.5s " }}
            className="w-4/5 md:w-full md:bg-stone-800 md:bg-opacity-40 md:group-hover:bg-[#56ccf2] md:group-hover:bg-opacity-20 p-4 md:py-3 md:px-8 rounded-full"
          >
            <h1 className="text-muted text-gray-400 font-medium text-[14px] text-sm tracking-wide hidden md:block">
              {type}
            </h1>

            <div className="flex items-center space-x-2 text-gray-300 group-hover:text-[#56ccf2]">
              <h1 className="   md:mt-1 text-[16px] lg:text-[24px]">{name}</h1>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
