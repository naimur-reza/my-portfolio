"use client";

import { IconContext } from "react-icons";
import { styles } from "@/app/styles/styles";
import { socialLinks } from "@/constants";

const HeroSection = () => {
  return (
    <>
      <div className="flex justify-between ">
        <div>
          <p className={`${styles.heroHeadText} `}>
            I&#39;m <span className="blue-text-gradient">Naimur Reza</span>
          </p>
          <p className={`${styles.heroSubText} w-2/3`}>
            I develop web interface and web application
          </p>
        </div>

        <div className="text-sky-400 opacity-90 space-y-9 mt-8">
          {socialLinks.map((socialLink, index) => {
            return (
              <div key={index}>
                <IconContext.Provider value={{ className: "icon-class" }}>
                  <a title={socialLink.name} href={socialLink.link}>
                    <socialLink.icon
                      size={25}
                      className="hover:-translate-y-1 hover:text-sky-500 duration-200 transition cursor-pointer"
                    />
                  </a>
                </IconContext.Provider>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
