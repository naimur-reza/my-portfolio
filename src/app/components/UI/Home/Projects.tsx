"use client";

import { motion } from "framer-motion";

import ProjectCard from "../../Cards/ProjectCard";
import { styles } from "@/app/styles/styles";

import { projects } from "@/constants/projectsData";

const Projects = () => {
  return (
    <>
      <p className={`${styles.sectionSubText} `}>My work</p>
      <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>

      <div className="w-full flex">
        Following projects showcases my skills and experience through real-world
        examples of my work. Each project is briefly described with links to
        code repositories and live demos in it. It reflects my ability to solve
        complex problems, work with different technologies, and manage projects
        effectively.
      </div>

      <div className="mt-20 mx-3 md:mx-0 md:-ml-4 md:-mr-4 grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-5 justify-center md:justify-start ">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            type={project.type}
            image={project.image}
            techIcons={project.techIcons}
            description={project.description}
            server_link={project.server_link}
            client_link={project.client_link}
            live_link={project.live_link}
          />
        ))}
      </div>
    </>
  );
};

export default Projects;
