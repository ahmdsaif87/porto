import type { SiteConfig, SiteContent,  } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Ahmad Saifi — Mobile & Web Developer",
  author: "Ahmad Saifi Khayatu Ulumuddin",
  description:
    "A student from Universitas Harkat Negeri, based in Tegal, Indonesia. I am a learner web and mobile developer, passionate about building digital solutions and continuously improving my skills in modern technologies.",
  lang: "en",
  siteLogo: "/ahmdsaif-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Education", href: "#study" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Twitter", href: "https://x.com/ahmdsaif_" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/ahmadsaif-dev/" },
    { text: "Github", href: "https://github.com/ahmdsaif87" },
    { text: "Youtube", href: "https://www.youtube.com/@ahmadsaif9818" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Ahmad Saifi",
    specialty: "Web & Mobile Developer",
    summary:
      "A student from Universitas Harkat Negeri, based in Tegal, Indonesia. I am a learner web and mobile developer, passionate about building digital solutions and continuously improving my skills in modern technologies.",
    email: "ahmadsaif7456@gmail.com",
    image: "/ahmdsaif-big.jpg",
  },
  experience: [
  {
    company: "Freelancer & Self-Employed",
    position: "Full Stack Developer",
    startDate: "September 2025",
    endDate: "Present",
    summary: [
      "Worked independently with multiple clients on custom web and mobile app projects, managing all phases from planning to deployment.",
      "Built scalable applications using modern stacks such as React, Node.js, and Firebase, improving client delivery speed and performance.",
      "Handled full-cycle development, including UI design, backend architecture, and API integrations, ensuring efficient and maintainable codebases.",
    ],
  },
  ],
  study: [
    {
      institution: "Universitas Harkat Negeri",
      degree: "Bachelor's Degree in Informatics Engineering",
      startDate: "2023",
      endDate: "Present",
    },
    {
      institution: "SMK Negeri 2 Adiwerna",
      degree: "Computer and Networking Technology (TKJ)", 
      startDate: "2020",
      endDate: "2023",
    },
  ],
  projects: [
  {
    name: "Punk Merch",
    summary:
      "An e-commerce platform using Laravel, built as part of a campus project assignment.",
    linkPreview: "/",
    linkSource: "https://github.com/fadilsflow/campus-web-programing-2.git",
    image: "/spotifu.png",
    collaborators: [
      {
        name: "Wahyu Akhmad Fadillah",
        github: "https://github.com/fadilsflow",
        avatar: "https://github.com/fadilsflow.png",
      },
      {
        name: "Dede Fernanada",
        github: "https://github.com/ddfrnnd",
        avatar: "https://github.com/ddfrnnd.png",
      },
      {
        name: "Alifia Shafa",
        github: "https://github.com/Alifia-30",
        avatar: "https://github.com/Alifia-30.png",
      },
      {
        name: "Ahmad Saif",
        github: "https://github.com/ahmdsaif87",
        avatar: "https://github.com/ahmdsaif87.png",
      },
    ],
  },
  {
    name: "Dya Collection",
    summary:
      "An e-commerce platform that sells bags and accessories for women, built collaboratively with a small team for an MSME digitalization project.",
    linkPreview: "https://dya-collection.vercel.app/",
    linkSource: "https://github.com/ahmdsaif87/dya-collection.git",
    image: "/dya-collection.png",
    collaborators: [
      {
        name: "Wahyu Akhmad Fadillah",
        github: "https://github.com/fadilsflow",
        avatar: "https://github.com/fadilsflow.png",
      },
      {
        name: "Dede Fernanada",
        github: "https://github.com/ddfrnnd",
        avatar: "https://github.com/ddfrnnd.png",
      },
      {
        name: "Alifia Shafa",
        github: "https://github.com/Alifia-30",
        avatar: "https://github.com/Alifia-30.png",
      },
      {
        name: "Ahmad Saif",
        github: "https://github.com/ahmdsaif87",
        avatar: "https://github.com/ahmdsaif87.png",
      },
    ],
  },
],
  about: {
    description: `
      I'm Ahmad Saifi, a student at University of Harkat Negeri and an enthusiastic Mobile and Web Developer in the making! I’m based on Tegal, Indonesia.

      I’m currently on an exciting learning journey, building my skills from the ground up in both mobile and web development. I’m fascinated by how creativity and code combine to solve real-world problems. This website showcasing my dedication to learning and my first attempts at developing functional, clean digital work.
    `,
    image: "/ahmdsaif-big.jpg",
  },
};

// #5755ff
