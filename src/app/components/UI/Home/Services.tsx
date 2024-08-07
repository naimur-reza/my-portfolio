"use client";

import React from "react";
import { motion } from "framer-motion";

import CountUp from "react-countup";
import { fadeIn, textVariant } from "@/utils/motions";
import PhotoGallery from "../PhotoGallery";
import StarWrapper from "@/hoc/SectionWrapper";
import { styles } from "@/app/styles/styles";

const Services = () => {
  return (
    <>
      <div id="services" className="mt-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={textVariant()}
        >
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>
        <div className="mt-10 flex justify-between lg:flex-row  flex-col-reverse items-center lg:items-start ">
          <div className="mt-10 lg:mt-0 ">
            <div className="flex gap-7 items-center flex-wrap ">
              <div>
                <span className="blue-text-gradient cursor-help font-bold lg:text-[44px] text-[30px]">
                  <CountUp enableScrollSpy={true} end={20} />
                </span>
                <br />
                <span className="text-gray-400 font-semibold lg:text-normal text-sm">
                  years old
                </span>
              </div>
              <div>
                <span className="blue-text-gradient  cursor-help font-bold lg:text-[44px] text-[30px]">
                  <CountUp enableScrollSpy={true} end={2} />+
                </span>
                <br />
                <span className="text-gray-400 font-semibold lg:text-normal text-sm">
                  Years web dev{" "}
                </span>
              </div>
              <div>
                <span className="blue-text-gradient cursor-help font-bold lg:text-[44px]  text-[30px]">
                  <CountUp enableScrollSpy={true} end={1932} />
                </span>
                <br />
                <span className="text-gray-400 font-semibold lg:text-normal text-sm">
                  Total Commits
                </span>
              </div>
            </div>

            <motion.p
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeIn("", "", 1, 1)}
              className="mt-8 text-secondary text-[17px] max-w-xl leading-[30px] text-justify"
            >
              I&#39;m a skilled software developer with experience in{" "}
              <span className="font-bold">React</span> and
              <span className="font-bold"> JavaScript</span>, and expertise in
              frameworks like <span className="font-bold">Next.Js</span>,{" "}
              <span className="font-bold">Node.Js </span> and{" "}
              <span className="font-bold">Express.Js</span> I&#39;m a quick
              learner and collaborate closely with clients to create efficient,
              scalable, and user-friendly solutions that solve real-world
              problems. Let&#39;s work together to bring your ideas to life!
            </motion.p>
            <motion.p
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeIn("", "", 1.3, 1)}
              className="mt-8 text-secondary text-[17px] max-w-xl leading-[30px] text-justify"
            >
              I’ve spent most of my life deeply interested in technology and
              food, continuously building things with both. As a teenager, I was
              a classic computer nerd, spending most of my times messing with
              the computer. And of course, playing games. Most of that is still
              true today.
            </motion.p>
          </div>
          <PhotoGallery />
        </div>
      </div>
    </>
  );
};

export default StarWrapper(Services, "");
