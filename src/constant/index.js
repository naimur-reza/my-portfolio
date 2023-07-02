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
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

import campsunshine from "../../src/assets/projects/campsunshine-min.png";
import tinkerland from "../../src/assets/projects/tinkerland-min.png";
import cookdens from "../../src/assets/projects/cookdens-min.png";
import aircnc from "../../src/assets/projects/aircnc-min.png";
import toursite from "../../src/assets/projects/toursite-min.png";
import coffeesite from "../../src/assets/projects/coffeesite-min.png";
import cardoctor from "../../src/assets/projects/cardoctor-min.png";
import emajhon from "../../src/assets/projects/emajhon-min.png";
import booksite from "../../src/assets/projects/booksite-min.png";
import jobPortal from "../../src/assets/projects/jobportal-min.png";
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

const technologies = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  "https://skillicons.dev/icons?i=express",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "https://skillicons.dev/icons?i=vercel",
  "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
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
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "nodeJs",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "mongodb",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "tailwind",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      },
    ],
    image: campsunshine,
    server_link: "https://github.com/naimur-reza/Campsunshine-Server",
    client_link: "https://github.com/naimur-reza/Campsunshine-Client",
    live_link: "https://campsunshine-c653c.web.app/",
  },
  {
    name: "Tinker Land",
    description:
      "Web application that enables users to search for trendy toys, Avengers toys, and other toys. Users can also add toys to their cart and checkout using Stripe. Applied authentication using firebase",
    tags: [
      {
        name: "react",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "nodeJs",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "mongodb",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "tailwind",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      },
    ],
    image: tinkerland,
    server_link: "https://github.com/naimur-reza/TinkerLand-Server",
    client_link: "https://github.com/naimur-reza/TinkerLand-Client",
    live_link: "https://tinkerr-land.web.app/",
  },
  {
    name: "CHEF HUNTER",
    description:
      "A Recipe Services Web Application. Where users can search for food based on Chef. Available valuable chef's with their best recipes. User's can bookmark their favorite Foods.",
    tags: [
      {
        name: "react",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "nodeJs",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "mongodb",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "tailwind",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      },
    ],
    image: cookdens,
    server_link: "https://github.com/naimur-reza/CHEF_HUNTER_SERVER",
    client_link: "https://github.com/naimur-reza/CHEF-HUNTER-CLIENT",
    live_link: "https://chef-master-pro.web.app/home/",
  },
  {
    name: "Air Cnc",
    description:
      "A hotel booking service web-application. Airbnb clone web-application. Available best hotel's with their best services. User's can book their hotel after make payment",
    tags: [
      {
        name: "react",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "nodeJs",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "mongodb",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "tailwind",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      },
    ],
    image: aircnc,
    server_link: "https://github.com/naimur-reza/AirCnc-Server",
    client_link: "https://github.com/naimur-reza/AirCnc-Client",
    live_link: "https://air-cnc-d27d2.web.app/",
  },
  {
    name: "EmaJhon",
    description:
      "A e-commerce web-application. Available valuable products with their best services. User's can add their product to cart and checkout after make payment. ",
    tags: [
      {
        name: "react",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "nodeJs",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "mongodb",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "tailwind",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      },
    ],
    image: emajhon,
    server_link: "https://github.com/naimur-reza/Emajhon-Server-Backend",
    client_link: "https://github.com/naimur-reza/EmaJhon-Content-Client",
    live_link: "https://ema-jhon-63274.web.app/",
  },
  {
    name: "Car Doctor",
    description:
      "A car service web-application. Available valuable services. Customers can make appointment for their services. Applied authentication using firebase",
    tags: [
      {
        name: "react",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "nodeJs",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "mongodb",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "tailwind",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      },
    ],
    image: cardoctor,
    server_link: "https://github.com/naimur-reza/Car-Doctor-Server-Backend",
    client_link: "https://github.com/naimur-reza/EmaJhon-Content-Client",
    live_link: "https://car-doctor-man.web.app/",
  },
  {
    name: "Espresso Emporium",
    description:
      "A coffee shop where user can add new available coffee and order price. Also can delete and update coffee as well",
    tags: [
      {
        name: "react",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "nodeJs",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "mongodb",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "tailwind",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      },
    ],
    image: coffeesite,
    server_link: "https://github.com/naimur-reza/Coffee-Server-Backend",
    client_link: "https://github.com/naimur-reza/Coffee-Content-Client",
    live_link: "https://coffee-beta.surge.sh/",
  },
  {
    name: "Lit Lounge",
    description:
      "A book shop frontend only web-application, where user can find their favorite book and order price. Available valuable books. ",
    tags: [
      {
        name: "react",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "tailwind",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      },
    ],
    image: booksite,

    client_link: "https://github.com/naimur-reza/Lit-lounge",
    live_link: "http://dadur-boi.surge.sh/",
  },
  {
    name: "Travel Guru",
    description:
      "A travel agency web-application. User can search for their favorite place and book their hotel.",
    tags: [
      {
        name: "react",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "tailwind",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      },
    ],
    image: toursite,

    client_link: "https://github.com/naimur-reza/Travel-Guru-Content-Client",
    live_link: "https://travelar-guru.web.app/",
  },
  {
    name: "Hire Spotlight",
    description:
      "A job searching web-application. Where user can search for job and they can apply for job.",
    tags: [
      {
        name: "react",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "tailwind",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      },
    ],
    image: jobPortal,

    client_link: "https://github.com/naimur-reza/hire-spotlight",
    live_link: "http://hire-spotlight.surge.sh/",
  },
];

const socialLinks = [
  {
    icon: FaGithub,
    name: "naimur-reza",
    link: "https://github.com/naimur-reza",
  },
  {
    icon: FaTwitter,
    name: "NaimurReza3",
    link: "https://twitter.com/NaimurReza3",
  },
  {
    icon: FaLinkedinIn,
    name: "naimur-reza",
    link: "https://linkedin.com/in/naimur-reza",
  },
  {
    icon: FaEnvelope,
    name: "naimur.rezaa@gmail.com",
  },
  {
    icon: FaFacebook,
    name: "Naimur Reza Anik",
    link: "https://www.facebook.com/iamrezadadu",
  },
];

export { services, projects, testimonials, socialLinks, technologies };
