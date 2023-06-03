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
  realtor,
  smartwatch,
  portfolio,
  modest,
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
      "Co-developed art directions with the communications manager on different marketing programs, campaigns, and initiatives that required digital design produced internally and externally.",
      "Redesigned a responsive graphic user interface for a web-based remote monitoring application.",
      "Designed multilingual landing pages, email newsletters, and social media posts through Hubspot.",
      "Liaised with corporate staff, agencies, commercial printers, and/or sign fabricators to produce and coordinate various projects.",
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
    name: "Realtor",
    description:
      "Web-based platform that allows users to search housing information for either renting or buying purposes. Deployed and hosted with Vercel.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "rapidApi",
        color: "green-text-gradient",
      },
      {
        name: "chakraui",
        color: "pink-text-gradient",
      },
    ],
    image: realtor,
    link: "https://realtor-thuynguyen729.vercel.app/",
  },
  {
    name: "Personal Portfolio",
    description:
      "Single-page portfolio website to showcase professional expertise, skills and projects. Deployed with AWS Amplify, hosted with route53.",
    tags: [
      {
        name: "vitejs",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    link: "#",
  },
  {
    name: "Smart Watch",
    description:
      "A landing page template for promoting Smart Watch product and its paired application. Built with pure HTML, CSS, and Javascript. Deployed with Github pages.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: smartwatch,
    link: "https://thuynguyen729.github.io/Smartwatch-Landing-Page/",
  },
  {
    name: "Modest Agency",
    description:
      "My very first project to practice also to showcase what I can do with fundamental knowledge of HTML, CSS. A digital agency landing page template. Deployed with Github pages.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "jQuery",
        color: "pink-text-gradient",
      },
    ],
    image: modest,
    link: "https://thuynguyen729.github.io/Agency-Template/",
  },
]

export { services, technologies, experiences, testimonials, projects }
