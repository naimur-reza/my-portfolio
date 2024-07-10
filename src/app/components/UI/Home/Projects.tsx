"use client";

import { motion } from "framer-motion";

import ProjectCard from "../../Cards/ProjectCard";
import { styles } from "@/app/styles/styles";
import { fadeIn, staggerContainer, textVariant } from "@/utils/motions";
import { projects } from "@/constants/projectsData";

const StarWrapper = (Component: any, idName: string) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className={`${styles.padding} max-w-7xl mx-auto    `}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

const Projects = () => {
  return (
    <>
      <motion.div id="projects" variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.5, 1)}
          className="mt-3  text-secondary text-[17px] max-w-3xl  leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 mx-3 md:mx-0 md:-ml-4 md:-mr-4 grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-5 justify-center md:justify-start ">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            type={project.type}
            image={project.image}
          />
        ))}
      </div>
    </>
  );
};

export default StarWrapper(Projects, "");
