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
import frontend from "../../src/assets/frontend.png";
import backend from "../../src/assets/backend.png";
import Mern from "../../src/assets/mern.png";
import react from "../../src/assets/react.png";
import campsunshine from "../../src/assets/projects/campsunshine.png";
import tinkerland from "../../src/assets/projects/tinkerland.png";
import cookdens from "../../src/assets/projects/cookdens.png";
import aircnc from "../../src/assets/projects/aircnc.png";
import toursite from "../../src/assets/projects/toursite.png";
import coffeesite from "../../src/assets/projects/coffeesite.png";
import cardoctor from "../../src/assets/projects/cardoctor.png";
import emajhon from "../../src/assets/projects/emajhon.png";
import booksite from "../../src/assets/projects/booksite.png";
import jobPortal from "../../src/assets/projects/jobportal.png";
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
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Mern Satck Developer",
    icon: Mern,
  },
  {
    title: "React Developer",
    icon: react,
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

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Naimur proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Naimur does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Naimur optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Camp Sun Shine",
    description:
      "Web-based platform that allows students to search, Language Courses. There are three  dashboard for three role Instructor, Student and Admin. Also have payment-gateway using stripe for enroll student.",

    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodeJs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "orange-text-gradient",
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
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "orange-text-gradient",
      },
    ],
    image: tinkerland,
    source_code_link: "https://github.com/",
    live_link: "",
  },
  {
    name: "Cook Dens",
    description:
      "A Recipe Services Web Application. Where users can search for food based on Chef. Available valuable chef's with their best recipes. User's can bookmark their favorite Foods.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodeJs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "orange-text-gradient",
      },
    ],
    image: cookdens,
    source_code_link: "https://github.com/",
  },
  {
    name: "Air Cnc",
    description:
      "A hotel booking service web-application. Airbnb clone web-application. Available valuable hotel's with their best services. User's can book their hotel after make payment",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodeJs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "orange-text-gradient",
      },
    ],
    image: aircnc,
    source_code_link: "https://github.com/",
  },
  {
    name: "EmaJhon",
    description:
      "A e-commerce web-application. Available valuable products with their best services. User's can add their product to cart and checkout after make payment. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodeJs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "orange-text-gradient",
      },
    ],
    image: emajhon,
    source_code_link: "https://github.com/",
  },
  {
    name: "Car Doctor",
    description:
      "A car service web-application. Available valuable services. Customers can make appointment for their services. Applied authentication using firebase",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodeJs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "orange-text-gradient",
      },
    ],
    image: cardoctor,
    source_code_link: "https://github.com/",
  },
  {
    name: "Espresso Emporium",
    description:
      "A coffee shop where user can add new available coffee and order price. Also can delete and update coffee as well",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodeJs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "orange-text-gradient",
      },
    ],
    image: coffeesite,
    source_code_link: "https://github.com/",
  },
  {
    name: "Lit Lounge",
    description:
      "A book shop frontend only web-application, where user can find their favorite book and order price. Available valuable books. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "orange-text-gradient",
      },
    ],
    image: booksite,
    source_code_link: "https://github.com/",
  },
  {
    name: "Travel Guru",
    description:
      "A travel agency web-application. User can search for their favorite place and book their hotel.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "orange-text-gradient",
      },
    ],
    image: toursite,
    source_code_link: "https://github.com/",
  },
  {
    name: "Hire Spotlight",
    description:
      "A job searching web-application. Where user can search for job and they can apply for job.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "orange-text-gradient",
      },
    ],
    image: jobPortal,
    source_code_link: "https://github.com/",
  },
];

export { technologies, services, projects, testimonials };
