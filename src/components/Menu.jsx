import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import { FaHome } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { IoMdConstruct } from "react-icons/io";
import { BsBriefcase } from "react-icons/bs";
import { GoDownload } from "react-icons/go";
const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${"sm:px-16 px-6 sm:py-6 py-8"} max-w-7xl mx-auto    `}>
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

const Menu = () => {
  return (
    <motion.div variants={fadeIn("top", "spring", 0.5, 2)}>
      <div className="flex    justify-between">
        <div className="w-16 h-16 border rounded-full overflow-hidden">
          <img
            className="object-cover w-full h-full hover:scale-125 duration-200 transition"
            src="https://i.ibb.co/zS6y2QY/IMG-20230629-201707.jpg"
            alt=""
          />
        </div>

        <ul className=" flex gap-7 items-center text-gray-200">
          <li className="hover:shadow-2xl hover:shadow-pink-500 duration-400 transition-colors hover:border-b-2 hover:border-pink-500 hover:text-pink-500">
            <a className="inline-flex items-center gap-2" href="#home">
              <FaHome size={22} /> Home
            </a>
          </li>
          <li className="hover:shadow-2xl hover:shadow-pink-500 duration-400 transition-colors hover:border-b-2 hover:border-pink-500 hover:text-pink-500">
            <a className="inline-flex items-center gap-2" href="#skills">
              <IoMdConstruct size={22} /> Skills
            </a>
          </li>
          <li className="hover:shadow-2xl hover:shadow-pink-500 duration-400 transition-colors hover:border-b-2 hover:border-pink-500 hover:text-pink-500">
            <a className="inline-flex items-center gap-2" href="#projects">
              <BsBriefcase size={22} /> Projects
            </a>
          </li>
          <li className="hover:shadow-2xl hover:shadow-pink-500 duration-400 transition-colors hover:border-b-2 hover:border-pink-500 hover:text-pink-500">
            <a className="inline-flex items-center gap-2" href="#contact">
              <IoMdContact size={22} /> Contact
            </a>
          </li>
          <li className="  border-sky-500 rounded border-b   px-3 pt-3 pb-2 bg-sky-600 bg-opacity-20 hover:bg-opacity-30 duration-200 transition ">
            <a href="" className="inline-flex items-center gap-2">
              {" "}
              <GoDownload size={22} /> Resume
            </a>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default StarWrapper(Menu, "");
