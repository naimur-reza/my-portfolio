import React, { useEffect, useState } from "react";
import { styles } from "../style";
import moment from "moment/moment";
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
      <h1 className={`${styles.heroSubText} red-text-gradient mt-7`}>
        {greetings}
      </h1>
      <div>
        <div className="pt-[7%]">
          <p className={`${styles.heroHeadText} `}>
            Hi, I'm <span className="blue-text-gradient">Naimur</span>
          </p>
          <p className={`${styles.heroSubText} w-1/3`}>
            I develop web interface and web application
          </p>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default About;
