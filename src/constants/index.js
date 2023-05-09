import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  nextjs,
  bootstrap,
  shopify,
  logo,
  fps,
  bcit,
  carrent,
  jobit,
  tripguide,
} from "../assets"

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
]

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "ReactJs Developer",
    icon: mobile,
  },
  {
    title: "CMS Developer",
    icon: backend,
  },
  {
    title: "User Interface Designer",
    icon: creator,
  },
]

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "ReactJs",
    icon: reactjs,
  },
  {
    name: "NextJs",
    icon: nextjs,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "NodeJs",
  //   icon: nodejs,
  // },
  {
    name: "Shopify",
    icon: shopify,
  },
  {
    name: "Three.js",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
]

const experiences = [
  {
    title: "Open For New Opportunities ",
    company_name: "as a Front-end Developer",
    icon: logo,
    iconBg: "#383E56",
    date: "Present",
    points: [
      "I am actively seeking new front-end/web development opportunities and am open to exploring new challenges in my career.",
    ],
  },
  {
    title: "Freelance Web Developer",
    company_name: "",
    icon: logo,
    iconBg: "#E6DEDD",
    date: "August 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Developing and maintaining CMS websites using Wordpress, SquareSpace, and Shopify. ",
    ],
  },
  {
    title: "Graphic and Web Designer",
    company_name: "FPS Food Process Solutions Corp",
    icon: fps,
    iconBg: "#383E56",
    date: "Apr 2021 - July 2022",
    points: [
      "Co-develop art directions with the communications manager on different marketing programs, campaigns, and initiatives that required digital design produced internally and externally.",
      "Redesign a responsive graphic user interface for a web-based remote monitoring application.",
      "Design multilingual landing pages, email newsletters, and social media posts through Hubspot.",
      "Liaise with corporate staff, agencies, commercial printers, and/or sign fabricators to produce and coordinate various projects.",
    ],
  },
  {
    title: "Graduated from BCIT",
    company_name: "BCIT",
    icon: bcit,
    iconBg: "#E6DEDD",
    date: "Dec 2020",
    points: [
      "Diplopma in New Media Design and Web Development.",
      "Graduated with distinction",
    ],
  },
]

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
]

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
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
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
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
    image: tripguide,
    source_code_link: "https://github.com/",
  },
]

export { services, technologies, experiences, testimonials, projects }
