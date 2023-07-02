import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import { FaHome } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { IoMdConstruct } from "react-icons/io";
import { BsBriefcase } from "react-icons/bs";
import { GoDownload } from "react-icons/go";
import Resume from "../constant/Naimur Reza Resume.pdf";
const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${"sm:px-16 px-6 py-0 lg:py-2 "} max-w-7xl mx-auto    `}>
        <Component />
      </motion.section>
    );
  };

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <motion.div variants={fadeIn("top", "spring", 0.5, 2)}>
      <div className="flex    justify-between">
        <div className="w-16 z-50 h-16 rounded-full overflow-hidden">
          <img
            className="object-cover w-full h-full hover:scale-125 duration-200 transition"
            src="https://i.ibb.co/zS6y2QY/IMG-20230629-201707.jpg"
            alt=""
          />
        </div>

        <div className="flex z-50 lg:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className=" text-gray-200  hover:text-gray-400 focus:outline-none  focus:text-gray-400"
            aria-label="toggle menu">
            {!isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 8h16M4 16h16"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>

        <ul
          className={`absolute lg:relative pt-20 p-10 lg:p-0 transition-all duration-300 ease-in-out  lg:flex gap-7  space-y-4 lg:space-y-0 inset-x-0  bg-black/90 lg:bg-transparent z-10  items-center text-gray-200  ${
            isOpen ? "top-0" : "-top-96 lg:top-0"
          }`}>
          <li className="hover:shadow-2xl hover:shadow-[#ff2727] duration-400 transition-colors hover:border-b-2 hover:border-[#ff2727] hover:text-[#ff2727]">
            <a className="inline-flex items-center gap-2" href="#home">
              <FaHome size={22} /> Home
            </a>
          </li>
          <li className="hover:shadow-2xl hover:shadow-[#ff2727] duration-400 transition-colors hover:border-b-2 hover:border-[#ff2727] hover:text-[#ff2727]">
            <a className="inline-flex items-center gap-2" href="#skills">
              <IoMdConstruct size={22} /> Skills
            </a>
          </li>
          <li className="hover:shadow-2xl hover:shadow-[#ff2727] duration-400 transition-colors hover:border-b-2 hover:border-[#ff2727] hover:text-[#ff2727]">
            <a className="inline-flex items-center gap-2" href="#projects">
              <BsBriefcase size={22} /> Projects
            </a>
          </li>
          <li className="hover:shadow-2xl hover:shadow-[#ff2727] duration-400 transition-colors hover:border-b-2 hover:border-[#ff2727] hover:text-[#ff2727]">
            <a className="inline-flex items-center gap-2" href="#contact">
              <IoMdContact size={22} /> Contact
            </a>
          </li>
          <li className="  border-sky-500 rounded border-b   px-3 pt-3 pb-2 bg-sky-600 bg-opacity-20 hover:bg-opacity-30 duration-200 transition ">
            <a
              href={Resume}
              download
              className="inline-flex items-center gap-2">
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
