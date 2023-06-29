import React, { useEffect, useState } from "react";
import { styles } from "../style";
import moment from "moment/moment";
import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
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
      <h1 className={`${""}  mt-7`}>{greetings}</h1>
      <div className="flex justify-between pt-[6%] ">
        <div>
          <p className={`${styles.heroHeadText} `}>
            Hi, I'm <span className="blue-text-gradient">Naimur</span>
          </p>
          <p className={`${styles.heroSubText} w-2/3`}>
            I develop web interface and web application
          </p>
        </div>
        <div className="text-sky-400 opacity-80 space-y-5 mt-8">
          <FaGithub
            size={25}
            className="cursor-pointer hover:-translate-y-1 duration-200 transition"
          />
          <FaTwitter
            size={25}
            className="cursor-pointer hover:-translate-y-1 duration-200 transition"
          />
          <FaLinkedinIn
            size={25}
            className="cursor-pointer hover:-translate-y-1 duration-200 transition"
          />
          <FaFacebook
            size={25}
            className="cursor-pointer hover:-translate-y-1 duration-200 transition"
          />
        </div>
      </div>
    </>
  );
};

export default About;
