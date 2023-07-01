import React, { useEffect, useState } from "react";
import { styles } from "../style";
import moment from "moment/moment";
import { socialLinks } from "../constant";
import { motion } from "framer-motion";
import { IconContext } from "react-icons";
import { fadeIn, slideIn } from "../utils/motion";
import Typed from "typed.js";
import SectionWrapper from "../hoc/SectionWrapper";
const About = () => {
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

  useEffect(() => {
    const initializeTyped = () => {
      const targetElement = el.current;
      if (targetElement) {
        const typed = new Typed(targetElement, {
          strings: ["success != true", "error != false", "!motivated"],
          typeSpeed: 110,
          loop: true,
          backDelay: 2300,
          showCursor: false,
        });
        return typed;
      }
      return null;
    };

    const typed = initializeTyped();

    return () => {
      if (typed) {
        typed.destroy();
      }
    };
  }, []);

  return (
    <>
      <div className="flex justify-between ">
        <motion.div variants={fadeIn("right", "spring", 0.4, 2)}>
          <h1
            className={`${"orange-text-gradient animate-pulse font-semibold -mt-10 mb-5 w-fit"} `}>
            Hi, {greetings}
          </h1>
          <motion.div variants={fadeIn("right", "spring", 0.4, 2)}>
            <div>
              <p className={`${styles.heroHeadText} `}>
                I'm <span className="blue-text-gradient">Naimur Reza</span>
              </p>
              <p className={`${styles.heroSubText} w-2/3`}>
                I develop web interface and web application
              </p>
            </div>
          </motion.div>
          <div className="mt-16 text-xl">
            <h1 className="text-white  tracking-wide font-bold">
              while (
              <span
                ref={el}
                id="element"
                className="bg-gradient-to-r from-[#ec008c] to-[#ff2727] text-transparent bg-clip-text"></span>
              )<span>&#123;</span>
              <br />
              <span className="bg-gradient-to-l from-[#43c7fb] to-[#c438fb] text-transparent bg-clip-text">
                tryAgain();
              </span>
              <br />
              <span>
                if(
                <span className="bg-gradient-to-r from-[#ec008c] to-[#ff2727] text-transparent bg-clip-text">
                  dead
                </span>
                )
              </span>{" "}
              <span>&#123;</span> <br />
              <span className="bg-gradient-to-l from-[#43c7fb] to-[#c438fb] text-transparent bg-clip-text">
                break;
              </span>{" "}
              <br />
              <span className="ml-5">&#125;</span> <br />
              <span>&#125;</span>
            </h1>
          </div>
        </motion.div>
        <div className="text-sky-400 opacity-90 space-y-9 mt-8">
          {socialLinks.map((socialLink, index) => {
            return (
              <motion.div
                key={index}
                variants={fadeIn("left", "spring", 0.4, 1.7)}>
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

export default SectionWrapper(About, "");
