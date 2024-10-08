"use client";

import ProjectCard from "../../Cards/ProjectCard";
import { styles } from "@/app/styles/styles";
import { projects } from "@/constants/projectsData";

const Projects = () => {
  return (
    <div className="container mt-20">
      <p className={`${styles.sectionSubText} `}>My work</p>
      <h2 className={`${styles.sectionHeadText} font-algem`}>Projects.</h2>

      <div className="mt-10  md:mx-0 md:-ml-4 md:-mr-4 grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-5 justify-center md:justify-start ">
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
    </div>
  );
};

export default Projects;
