import React from "react";
import { styles } from "../style";
const About = () => {
  return (
    <>
      <div className="pt-[10%]">
        <p className={`${styles.heroHeadText} `}>
          Hi, I'M <span className="blue-text-gradient">Naimur</span>
        </p>
        <p className={`${styles.heroSubText} w-1/3`}>
          I develop web interface and web application
        </p>
      </div>
    </>
  );
};

export default About;
