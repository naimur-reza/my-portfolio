import React, { useEffect, useState } from "react";
import { styles } from "../style";
import moment from "moment/moment";
import { socialLinks } from "../constant";
import { motion } from "framer-motion";
import { IconContext } from "react-icons";
import { fadeIn, slideIn } from "../utils/motion";
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
  return (
    <>
      <div className="flex justify-between pt-[6%] ">
        <motion.div variants={fadeIn("right", "spring", "0.4", "1.5")}>
          <h1 className={`${"orange-text-gradient"}  mt-7`}>{greetings}</h1>
          <div>
            <p className={`${styles.heroHeadText} `}>
              Hi, I'm <span className="blue-text-gradient">Naimur</span>
            </p>
            <p className={`${styles.heroSubText} w-2/3`}>
              I develop web interface and web application
            </p>
          </div>
        </motion.div>
        <div className="text-sky-400 opacity-80 space-y-5 mt-8">
          {socialLinks.map((socialLink, index) => {
            return (
              <motion.div variants={fadeIn("left", "spring", "0.4", "1.5")}>
                <div key={index}>
                  <IconContext.Provider value={{ className: "icon-class" }}>
                    <a href={socialLink.link}>
                      <socialLink.icon
                        size={26}
                        className="hover:-translate-y-1 duration-200 transition cursor-pointer"
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
