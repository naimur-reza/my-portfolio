"use client";

import React, { useEffect, useState } from "react";
import moment from "moment/moment";
import { motion } from "framer-motion";
import { IconContext } from "react-icons";
import { styles } from "@/app/styles/styles";
import { fadeIn } from "@/utils/motions";
import { socialLinks } from "@/constants";
import Typed from "typed.js";
import StarWrapper from "@/hoc/SectionWrapper";

const HeroSection = () => {
  const [greetings, setGreetings] = useState("");
  const currentHour = moment().hour();
  console.log(currentHour);
  useEffect(() => {
    if (currentHour >= 5 && currentHour < 12) {
      setGreetings("Good Morning 🌅");
      return;
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreetings("Good Afternoon ☀️");
      return;
    } else {
      setGreetings("Good Evening 🌙");
      return;
    }
  }, []);

  const el = React.useRef(null);

  return (
    <>
      <div className="flex justify-between ">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn("right", "spring", 0.4, 2)}
        >
          <h1
            className={`${"orange-text-gradient animate-pulse font-semibold -mt-10 mb-5 w-fit"} `}
          >
            Hi, {greetings}
          </h1>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeIn("right", "spring", 0.4, 2)}
          >
            <div>
              <p className={`${styles.heroHeadText} `}>
                I&#39;m <span className="blue-text-gradient">Naimur Reza</span>
              </p>
              <p className={`${styles.heroSubText} w-2/3`}>
                I develop web interface and web application
              </p>
            </div>
          </motion.div>
        </motion.div>
        <div className="text-sky-400 opacity-90 space-y-9 mt-8">
          {socialLinks.map((socialLink, index) => {
            return (
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                key={index}
                variants={fadeIn("left", "spring", 0.4, 1.7)}
              >
                <div>
                  <IconContext.Provider value={{ className: "icon-class" }}>
                    <a title={socialLink.name} href={socialLink.link}>
                      <socialLink.icon
                        size={25}
                        className="hover:-translate-y-1 hover:text-sky-500 duration-200 transition cursor-pointer"
                      />
                    </a>
                  </IconContext.Provider>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default StarWrapper(HeroSection, "");
