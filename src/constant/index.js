// import {
//   javascript,
//   html,
//   css,
//   reactjs,
//   tailwind,
//   nodejs,
//   mongodb,
//   git,
//   figma,
// } from "../assets/tech";

import campsunshine from "../../src/assets/projects/campsunshine.png";
import tinkerland from "../../src/assets/projects/tinkerland.png";
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    // icon: web,
  },
  {
    title: "Backend Developer",
    // icon: backend,
  },
  {
    title: "Mern Satck Developer",
    // icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    // icon: html,
  },
  {
    name: "CSS 3",
    // icon: css,
  },
  {
    name: "JavaScript",
    // icon: javascript,
  },
  {
    name: "React JS",
    // icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    // icon: tailwind,
  },
  {
    name: "Node JS",
    // icon: nodejs,
  },
  {
    name: "MongoDB",
    // icon: mongodb,
  },

  {
    name: "git",
    // icon: git,
  },
  {
    name: "figma",
    // icon: figma,
  },
];

const projects = [
  {
    name: "Camp Sun Shine",
    description:
      "Web-based platform that allows students to search, learning language based classes. There are three  dashboard for different role Teacher, Student and Admin. Also have payment-gateway using stripe for enroll student..",

    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodeJs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: campsunshine,
    source_code_link: "https://github.com/",
    live_link: "",
  },
  {
    name: "Tinker Land",
    description:
      "Web application that enables users to search for trendy toys, Avengers toys, and other toys. Users can also add toys to their cart and checkout using Stripe. The application is built using React, Redux, and Firebase.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodeJs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tinkerland,
    source_code_link: "https://github.com/",
    live_link: "",
  },
  {
    name: "Cook Dens",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    // image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { technologies, services, projects };
