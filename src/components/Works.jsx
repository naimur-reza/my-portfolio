import React from "react";
import { motion } from "framer-motion";
import { BsLink45Deg } from "react-icons/bs";
import { styles } from "../style";
import { BiCodeAlt } from "react-icons/bi";
import { TfiServer } from "react-icons/tfi";
import github from "../assets/github.png";

import { projects } from "../constant/index";
import { fadeIn, staggerContainer, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";

const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className={`${styles.padding} max-w-7xl mx-auto    `}>
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  live_link,
  client_link,
  server_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 1, 0.5)}>
      <Tilt
        options={{
          max: 45,
          scale: 1.1,
          speed: 450,
        }}
        className="bg-tertiary p-5 mb-10 blue-border rounded-2xl sm:w-[360px] w-full">
        <div className="relative w-full h-[230px]">
          <img
            loading="lazy"
            src={image}
            alt="project_image"
            className="w-full -mt-16  h-full object-cover rounded-2xl"
          />
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex  justify-between items-center">
          <div className=" flex  gap-2">
            {tags.map((tag) => (
              <img src={tag.icon} className="lg:w-8 w-6 " />
            ))}
          </div>
          <div className="flex items-center gap-3 text-gray-400">
            {server_link && (
              <a
                target="_blank"
                title="Server Side Repository"
                href={server_link}>
                <TfiServer size={18} />
              </a>
            )}
            <a target="_blank" title="Client Repository" href={client_link}>
              <BiCodeAlt size={20} />
            </a>
            <a target="_blank" title="Live Site" href={live_link}>
              <BsLink45Deg size={22} />
            </a>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div id="projects" variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.5, 1)}
          className="mt-3  text-secondary text-[17px] max-w-3xl  leading-[30px]">
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 ">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default StarWrapper(Works, "");
