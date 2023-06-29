import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";

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
        <h1 className="text-3xl font-bold pink-text-gradient border-secondary border-2 px-2  rounded-full">
          N
        </h1>
        <ul className=" flex gap-7 items-center text-gray-200">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="">Resume</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default StarWrapper(Menu, "");
