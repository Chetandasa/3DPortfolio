
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
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
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
      icon: web,
      source_code_link: "https://github.com/Chetandasa",
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    // {
    //   title: "Content Creator",
    //   icon: creator,
    // },
    {
      title: "Frontend Developer",
      icon: creator,
    },
  ];
  
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    // {
    //   name: "git",
    //   icon: git,
    // },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React.js & Next.js Developer",
      company_name: "TV-Shows",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2023",
      points: [
        "A TV Shows like Netflix you can watch movies and you Favorite it to watch later",
        "Login & Logout with Google, GitHub or Create a New account",
        "Fully responsive website",
      ],
    },
    {
      title: "OpenAI Connection",
      company_name: "AI Summarizer",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "April 2023",
      points: ["Summarizer is the Best AI-based web app with Modern user interface",
      "Connection to OpenAI model",
      "Integration of RTK Redux Toolkit Query",
      "Copy to clipboard browser history storage"
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "",
      points: ["Website Detiles"
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acm",
      image: "",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick.",
      name: "Chris Brown",
      designation: "CEO",
      company: "DEF",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Name of Client",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Properties-webiste",
      description:
        "Web-based platform that allows users to search Properties, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
      source_code_link: "",
    },
    {
      name: "Job IT",
      description:
        "Web application",
      tags: [
        {
          name: "react.js",
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
      source_code_link: "https://github.com/Chetandasa",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "next.js",
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
      source_code_link: "https://github.com/Chetandasa",
    },

    {
      name: "AI Sammz",
      description:
        "AI-Based Web Application using OpanAI's GPT model Sammarize is the Best Application. How does this work you can take any URL of link the Articles and past its over here AI will Generate the Summary for You",
      tags: [
        {
          name: "react.js",
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
    },

    {
      name: "Netflix Clone",
      description:
        "AI-Based Web Application using OpanAI's GPT model Sammarize is the Best Application. How does this work you can take any URL of link the Articles and past its over here AI will Generate the Summary for You",
      tags: [
        {
          name: "react.js",
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
    },

  ];
  
  export { services, technologies, experiences, testimonials, projects };