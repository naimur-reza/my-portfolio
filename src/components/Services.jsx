import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { services } from "../constant";
import SectionWrapper from "../hoc/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";
import ServiceCard from "./ServiceCard";
import CountUp from "react-countup";
const Services = () => {
  return (
    <>
      <div id="services" className="mt-20">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
          I'm a skilled software developer with experience in React and
          JavaScript, and expertise in frameworks like Next.Js, Node.js and
          Express.Js. I'm a quick learner and collaborate closely with clients
          to create efficient, scalable, and user-friendly solutions that solve
          real-world problems. Let's work together to bring your ideas to life!
        </motion.p>
        <div className="mt-20 ">
          <img src="nice" alt="" />
          <div className="flex gap-10 items-center flex-wrap">
            <div>
              <span className="blue-text-gradient font-bold text-[44px]">
                <CountUp enableScrollSpy={true} end={20} />
              </span>
              <br />
              <span className="text-gray-100">years old</span>
            </div>
            <div>
              <span className="blue-text-gradient font-bold text-[44px]">
                2+
              </span>
              <br />
              <span className="text-gray-100">Years web dev </span>
            </div>
            <div>
              <span className="blue-text-gradient font-bold text-[44px]">
                <CountUp enableScrollSpy={true} end={2100} />
              </span>
              <br />
              <span className="text-gray-100">Total Commits</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Services, "");
