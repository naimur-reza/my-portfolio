import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";
const Menu = () => {
  return (
    <motion.div variants={fadeIn("top", "spring", 0.5, 1.4)}>
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

export default SectionWrapper(Menu, "");
