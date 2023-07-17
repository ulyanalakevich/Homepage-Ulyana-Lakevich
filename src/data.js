import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

import Work1 from "./assets/Work1.png";
import Work2 from "./assets/Work2.png";
import Work3 from "./assets/Work3.png";
import Work4 from "./assets/Work4.png";
import Work5 from "./assets/Work5.png";
import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Ulyana",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Lakevich",
  },

  {
    id: 3,
    title: "Age : ",
    description: "20 Years",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Polish",
  },

  {
    id: 5,
    title: "Freelance : ",
    description: "Available",
  },

  {
    id: 7,
    title: "Phone : ",
    description: "+48794702217",
  },

  {
    id: 8,
    title: "Email : ",
    description: "ulyanalakevich@gmail.com",
  },

  {
    id: 10,
    title: "Langages : ",
    description: "Polish, English, Russian, Belarussian",
  },
];

export const stats = [
  {
    id: 1,
    title: "Junior Frontend Developer",
  },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2020 - PRESENT",
    title: "Interior Design",
    desc: "As a freelancer specializing in interior design, I utilize AutoCAD and 3ds Max to create stunning projects. Additionally, I provide comprehensive technical drawings that serve as essential guides for builders, ensuring precise implementation of the design during the projects realization.",
  },
  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2020 - 2023",
    title: "Bachelor degree in Architecture Interior Design ",
    name: "High School of Ecology and Management",
  },

  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2022-2023",
    title: "Frontend Developer ",
    name: "YouCode course",
  },
];

export const skills = [
  {
    id: 1,
    title: "HTML",
  },

  {
    id: 2,
    title: "JavaScript",
  },

  {
    id: 3,
    title: "CSS",
  },

  {
    id: 4,
    title: "GIT",
  },

  {
    id: 5,
    title: "Immutability",
  },

  {
    id: 6,
    title: "Styled Components",
  },

  {
    id: 7,
    title: "React",
  },

  {
    id: 8,
    title: "BEM convention",
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: "To-do list",
    urlDemo: "https://ulyanalakevich.github.io/todo-list-react/#/zadania",
    urlGit: "https://github.com/ulyanalakevich/todo-list-react",
  },

  {
    id: 2,
    img: Work2,
    title: "Currency Converter",
    urlDemo: "https://ulyanalakevich.github.io/currency-converter-app/",
    urlGit: "https://github.com/ulyanalakevich/currency-converter-app",
  },

  {
    id: 3,
    img: Work3,
    title: "Movies Browser",
    urlDemo:
      "https://krzysztof-gronski.github.io/Movies-Browser/#/movies?page=1",
    urlGit: "https://github.com/krzysztof-gronski/Movies-Browser",
  },

  {
    id: 4,
    img: Work4,
    title: "Portfolio",
    urlDemo: "https://ulyanalakevich.github.io/Portfolio-Ulyana-Lakevich/",
    urlGit: "https://github.com/ulyanalakevich/Portfolio-Ulyana-Lakevich",
  },
  {
    id: 5,
    img: Work5,
    title: "Personal Homepage(React)",
    urlDemo: "https://ulyanalakevich.github.io/Personal-Homepage/",
    urlGit: "https://github.com/ulyanalakevich/Personal-Homepage",
  },
];
export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
