import { assets } from "@/assets";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

export const socialLinks = [
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

export const myImages = [
  "https://i.ibb.co/fC163x1/me.jpg",
  "https://i.ibb.co/YNkyfNF/hike.jpg",
  "https://i.ibb.co/HzNXktP/bike.jpg",
  "https://i.ibb.co/YhcQTkC/IMG-9554.jpg",
  "https://i.ibb.co/5BrGfZp/stand.jpg",
];

export const mySkills = [
  {
    name: "Client Side",
    icon: assets.palette,
    techs: [
      {
        name: "UI/UX Design",
      },
      {
        name: "React Js",
        icon: assets.reactJs,
      },
      {
        name: "Next Js",
        icon: assets.nextJs,
      },
      {
        name: "Redux",
        icon: assets.redux,
      },
      {
        name: "Tailwind",
        icon: assets.tailwind,
      },
      {
        name: "Framer Motion",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg",
      },
    ],
  },
  {
    name: "Programming Languages and Frameworks",
    icon: assets.programming,
    techs: [
      {
        name: "Typescript",
        icon: assets.typescript,
      },
      {
        name: "Javascript",
        icon: assets.javascript,
      },
      {
        name: "NodeJs",
        icon: assets.nodeJs,
      },
      {
        name: "ExpressJs",
        icon: assets.expressJs,
      },
    ],
  },
  {
    name: "Data Storage and Caching",
    icon: assets.database,
    techs: [
      {
        name: "MongoDB",
        icon: assets.mongodb,
      },
      {
        name: "PostgreSQL",
        icon: assets.postgresql,
      },
      {
        name: "Supabase",
        icon: assets.supabase,
      },
    ],
  },
  {
    name: "Integrations",
    icon: assets.api,
    techs: [
      {
        name: "Stripe",
      },
      {
        name: "Firebase",
        icon: assets.firebase,
      },
      {
        name: "GraphQL",
        icon: assets.graphql,
      },
    ],
  },
  {
    name: "Testing",
    icon: assets.unittest,
    techs: [
      {
        name: "Vitest",
        icon: assets.vitest,
      },
    ],
  },
  {
    name: "Tools",
    icon: assets.tools,
    techs: [
      {
        name: "Git",
        icon: assets.git,
      },
      {
        name: "GitHub",
        icon: assets.github,
      },
      {
        name: "Vercel",
        icon: assets.vercel,
      },
      {
        name: "Figma",
        icon: assets.figma,
      },
      {
        name: "ER Diagram",
      },
    ],
  },
];
