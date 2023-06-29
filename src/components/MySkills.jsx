import React from "react";
import { styles } from "../style";
const MySkills = () => {
  return (
    <div className="py-32">
      <h1 className={`${styles.sectionSubText}`}>
        My <span>arsenal</span>
      </h1>
      <h1 className={`${styles.sectionHeadText}`}>Skills</h1>
      <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        The skills, tools and technologies I use to bring your products to life:
      </p>
      <div className="flex flex-wrap gap-28 mt-20">
        <img
          className="w-24"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        />

        <img
          className="w-24"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        />

        <img
          className="w-24"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
        />

        <img
          className="w-24"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        />

        <img
          className="w-24"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
        />

        <img
          className="w-24"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
        />

        <img
          className="w-24"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
        />

        <img
          className="w-24"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
        />

        <img
          className="w-24"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
        />

        <img
          className="w-24"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
        />

        <img
          className="w-24"
          src="https://skillicons.dev/icons?i=express"
          alt="express"
        />

        <img
          className="w-24"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        />
        <img
          className="w-24"
          src="https://skillicons.dev/icons?i=vercel"
          alt="vercel"
        />
        <img
          className="w-24"
          src="https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg"
          alt="netlify"
        />
        <img
          className="w-24"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
          alt="git"
        />
      </div>
    </div>
  );
};

export default MySkills;
