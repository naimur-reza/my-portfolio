import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import { FaHome } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { IoMdConstruct } from "react-icons/io";
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
          <li>
            <a className="inline-flex items-center gap-2" href="#home">
              <FaHome size={22} /> Home
            </a>
          </li>
          <li>
            <a className="inline-flex items-center gap-2" href="">
              <IoMdConstruct size={22} /> Skills
            </a>
          </li>
          <li>
            <a className="inline-flex items-center gap-2" href="">
              <IoMdContact size={22} /> Contact
            </a>
          </li>
          <li className=" border border-sky-500 rounded  px-2 py-1 bg-sky-500 bg-opacity-20 hover:bg-opacity-30 duration-200 transition">
            <a href="">Resume</a>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default StarWrapper(Menu, "");
