import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Javascript } from "@/components/ui/svgs/javascript";
import { Express } from "@/components/ui/svgs/express";
import { Laravel } from "@/components/ui/svgs/laravel";
import { Mongodb } from "@/components/ui/svgs/mongodb";
import { Mysql } from "@/components/ui/svgs/mysql";
import { Prisma } from "@/components/ui/svgs/prisma";
import { Tailwind } from "@/components/ui/svgs/tailwind";
import { Bootstrap } from "@/components/ui/svgs/bootstrap";
import { Api } from "@/components/ui/svgs/api";
import { Jwt } from "@/components/ui/svgs/jwt";
import { Github } from "@/components/ui/svgs/github";

export const DATA = {
  name: "Bishal Ghale",
  initials: "BG",
  url: "https://bishalghale.com.np",
  location: "Biratnagar, Nepal",
  locationLink: "https://www.google.com/maps/place/Biratnagar",
  description:
    "Full-Stack Developer (Next.js • Node.js) | Building real-world projects | Sharing my dev journey daily",
  summary:
    "I am a full-stack developer with experience in building web applications. I am passionate about technology and love to learn new things. I am also a team player and enjoy working in a collaborative environment.",
  avatarUrl: "/profile.png",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "TypeScript", icon: Typescript },
    { name: "JavaScript", icon: Javascript },

    { name: "Node.js", icon: Nodejs },
    { name: "Express.js", icon: Express },
    { name: "Laravel", icon: Laravel },

    { name: "MongoDB", icon: Mongodb },
    { name: "MySQL", icon: Mysql },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Prisma ORM", icon: Prisma },

    { name: "Tailwind CSS", icon: Tailwind },
    { name: "Bootstrap", icon: Bootstrap },

    { name: "REST API", icon: Api },
    { name: "JWT Auth", icon: Jwt },

    { name: "Git & GitHub", icon: Github },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "bishalghle@gmail.com",
    tel: "+977-9823733501",

    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/bishalghale98",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/bishal-ghale-54432631b/",
        icon: Icons.linkedin,
        navbar: true,
      },

      X: {
        name: "X (Twitter)",
        url: "https://x.com/Bishal__Ghale",
        icon: Icons.x,
        navbar: true,
      },

      Youtube: {
        name: "YouTube",
        url: "https://youtube.com/@bishalghale",
        icon: Icons.youtube,
        navbar: false, // hide until you upload content
      },

      email: {
        name: "Send Email",
        url: "mailto:bishalghle@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Personal Project",
      href: "#",
      badges: ["Featured"],
      location: "Nepal",
      title: "Full Stack Developer",
      logoUrl: "/project.png",
      start: "2026",
      end: "Present",
      description:
        "Building real-world full-stack applications using Next.js, Node.js, and Laravel. Developed projects like an eCommerce platform, online voting system, and SaaS-based ideas. Focused on authentication, REST APIs, database design, and scalable architecture.",
    },
    {
      company: "Self Learning",
      href: "#",
      badges: ["Learning"],
      location: "Remote",
      title: "MERN Stack Developer",
      logoUrl: "/learning.png",
      start: "2025",
      end: "Present",
      description:
        "Actively learning and building with React, Next.js, Node.js, Express, MongoDB, and PostgreSQL. Exploring Prisma ORM, JWT authentication, and modern UI development with Tailwind CSS.",
    },
  ],
  education: [
    {
      school: "Mahendra Morang Adarsh Multiple Campus",
      href: "https://mmamc.tu.edu.np/",
      degree: "Bachelor's of Computer Applications (BCA)",
      logoUrl: "/mmamc.png",
      start: "2024",
      end: "Present",
    },
    {
      school: "Redstar English Boarding School",
      href: "https://www.facebook.com/redstarenglishschool/",
      degree: "+2, Management (Business & Economics)",
      logoUrl: "/redstar.png",
      start: "2019",
      end: "2021",
    },
    {
      school: "Janasewa Higher Secondary School",
      href: "https://www.facebook.com/p/Janasewa-Secondary-School-100064023044118/",
      degree: "SEE (Secondary Education Examination)",
      logoUrl: "/janasewa.png",
      start: "2006",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "Anonymous Message App",
      href: "https://sayit-flax.vercel.app/",
      dates: "2025",
      active: true,
      description:
        "Developed an anonymous messaging web application where users can receive and reply to messages without revealing identity. Integrated AI (Grok API) for generating smart replies. Built using Next.js with both frontend and backend routes.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "API Integration",
      ],
      links: [
        {
          type: "Website",
          href: "https://sayit-flax.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/bishalghale98/anonymous-message-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://res.cloudinary.com/dqifulrhz/image/upload/v1774424829/Screenshot_2026-03-25_133150_hnzgne.png",
      video: "https://res.cloudinary.com/dqifulrhz/video/upload/v1774424811/sayit-short-video_mshifw.mp4",
    },

    {
      title: "LMS Backend",
      href: "https://github.com/bishalghale98/Learning-MERN2.0",
      dates: "2025",
      active: true,
      description:
        "Built a backend system for a Learning Management System using Node.js, Express.js, and MongoDB Atlas. Developed RESTful APIs for full CRUD operations, including image upload and data management.",
      technologies: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST API",
        "JWT",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/bishalghale98/Learning-MERN2.0",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Website",
          href: "https://learning-mern2-0.onrender.com/",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/LMSBackend.webp",
    },

    {
      title: "LMS Frontend",
      href: "https://github.com/bishalghale98/Basic-React",
      dates: "2025",
      active: true,
      description:
        "Developed the frontend of a Learning Management System using React and Tailwind CSS. Integrated with backend APIs to perform full CRUD operations and manage application state efficiently.",
      technologies: [
        "React",
        "Tailwind CSS",
        "JavaScript",
        "API Integration",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/bishalghale98/Basic-React",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Website",
          href: "https://basic-react-rho.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/LMSFrontend.webp",
    },

    {
      title: "Ecommerce Frontend",
      href: "https://github.com/bishalghale98/frontendproject",
      dates: "2023 - 2024",
      active: true,
      description:
        "Developed an eCommerce frontend application using React.js, Tailwind CSS, and Bootstrap. Implemented product listing, cart functionality, and checkout UI.",
      technologies: [
        "React",
        "Tailwind CSS",
        "Bootstrap",
        "JavaScript",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/bishalghale98/frontendproject",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Website",
          href: "https://frontendproject-lovat.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/EcommerceFrontend.webp",
    },
  ],
  hackathons: [
    {
      title: "Taranga Software Hackathon",
      dates: "2025",
      location: "Nepal",
      description:
        "Participated in the Taranga Software Hackathon where I collaborated with a team to build a real-world application under time constraints. Worked on full-stack development, focusing on problem-solving, rapid prototyping, and implementing core features using modern web technologies.",
      image: "/hackathon.png",
      links: [
        {
          title: "Project",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "#",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "#",
        },
      ],
    },
  ],
} as const;
