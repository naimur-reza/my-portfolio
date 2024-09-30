import { FaHome } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { IoMdConstruct } from "react-icons/io";
import { BsBriefcase } from "react-icons/bs";
import { GoDownload } from "react-icons/go";

const navItems = [
  {
    title: "Home",
    href: "/",
    icon: FaHome,
  },
  {
    title: "Skills",
    href: "#skills",
    icon: IoMdConstruct,
  },
  {
    title: "Projects",
    href: "#projects",
    icon: BsBriefcase,
  },
  {
    title: "Contact",
    href: "#contact",
    icon: IoMdContact,
  },
  {
    title: "Resume",
    href: "/resume.pdf",
    icon: GoDownload,
  },
];

export default navItems;
