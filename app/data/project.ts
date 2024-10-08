import { type ProjectCardProps } from "@/app/components/project/project-card";
import { type ProjectShowcaseListItem } from "@/app/components/project/project-showcase-list";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Mindful AI",
    href: "/projects",
    tags: ["Reactjs", "Tailwindcss", "Nodejs","Redux","GeminiModel","MongoDB", "firebase"],
    image: {
      LIGHT: "/images/projects/mindful.png",
      DARK: "/images/projects/mindful.png",
    },
  },
  {
    index: 1,
    title: "ProjectVerse",
    href: "/projects",
    tags: [
      "Reactjs",
      "Tailwindcss",
      "Vite",
      "React-router-dom",
      "Redux",
        "Nodejs",
    "MongoDB",


      "Firebase",
    ],
    image: {
      LIGHT: "/images/projects/projectVerse.png",
      DARK: "/images/projects/projectVerse.png",
    },
  },
  {
    index: 2,
    title: "Epic-Estate",
    href: "/projects",
    tags: ["Reactjs",
         "Vite", 
         "Tailwindcss", 
         "Redux",
            "Nodejs",
            "Express",

            "MongoDB",
            "Firebase",
            "React-router-dom",
            "Redux",
        ],
    image: {
      LIGHT: "/images/projects/epic-estate.png",
      DARK: "/images/projects/epic-estate.png",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Mindful AI",
    favicon: "/images/projects/mindfulLogo.png",
    imageUrl: [
      "/images/projects/mindful.png",
    "/images/projects/mindful2.png",
    "/images/projects/mindful3.png",
    ],
    description:
      "MindfulAI is a mental health support platform designed to provide students with empathetic, personalized assistance during challenging times. The website offers a safe, judgment-free space where users can engage in meaningful conversations about stress, anxiety, and other mental health concerns. Powered by advanced AI, MindfulAI delivers thoughtful, human-like responses tailored to the user’s emotional needs.",
    sourceCodeHref: "https://github.com/GURMAN1912/genai-project",
    liveWebsiteHref: "https://mindfulai.vercel.app/",
  },
  {
    name: "ProjectVerse",
    favicon: "/images/projects/ProjectVerseLogo.png",
    imageUrl: [
      "/images/projects/projectVerse.png",
      "/images/projects/projectVerse2.png",
      "/images/projects/projectVerse3.png",
    ],
    description:
      "ProjectVerse is a social platform designed for developers and tech enthusiasts to connect, share, and explore tech-related content. Users can create posts with images and tech stack details, follow others, like and comment on posts, and discover content through a search function. The platform provides personalized feed pages tailored to the people you follow, making it easy to stay updated.",
    sourceCodeHref: "https://github.com/GURMAN1912/projectVerse",
    liveWebsiteHref: "https://projectverse.onrender.com/",
  },
  {
    name: "Epic-Estate",
    favicon: "/images/projects/epic-estate-logo.avif",
    imageUrl: [
      "/images/projects/epic-estate.png",
      "/images/projects/epic-estate2.png",
    ],
    description:
      "The website features stunning property listings with high-quality images, virtual tours, and in-depth descriptions to help you explore every detail of your next dream home.With advanced search filters, users can easily narrow down options based on location, property type, amenities, and budget",
    sourceCodeHref: "https://github.com/GURMAN1912/Epic_Estate",
    liveWebsiteHref: "https://epic-estate.onrender.com/",
  },
  {
    name: "Movix",
    favicon: "/images/projects/movix-logo.png",
    imageUrl: [
      "/images/projects/movix1.png",
        "/images/projects/movix2.png",
    ],
    description:
      "Movix is a modern movie streaming platform built with React and styled using SCSS, powered by the TMDB API. It offers a vast library of the latest movies and TV shows, with real-time updates and personalized recommendations. Users can explore genres, search titles, view trailers, and create custom watchlists, all within a sleek, responsive interface optimized for seamless browsing across devices.",
    sourceCodeHref: "https://github.com/GURMAN1912/MOVIX__",
    liveWebsiteHref: "https://movix-rose-one.vercel.app/",
  },
  {
    name: "Nestjs Landing Page",
    favicon: "",
    imageUrl: [
      "/images/projects/landing-page1.png",
      "/images/projects/landing-page2.png",
      "/images/projects/landing-page3.png",
    ],
    description:
      "Get latest covid related stats in a table where user can filter using country and cases. It also has a map which show every countries data for quick view. It uses an open source api (disease.sh). Made using Reactjs, Javascript and MUI",
    sourceCodeHref: "https://github.com/GURMAN1912/nextjs-landing-page",
    liveWebsiteHref: "https://next-landing-webpage.vercel.app/",
  },
  {
    name: "Social Media",
    favicon: "",
    imageUrl: [
      "/images/projects/social-media1.png",
        "/images/projects/social-media2.png",
    ],
    description:
      "A social media website is an online platform that allows users to create profiles, share content, connect with others, and interact with each other through various features such as posts, comments, likes and more",
    sourceCodeHref: "https://social-media-app-client-xi.vercel.app/",
  },
];