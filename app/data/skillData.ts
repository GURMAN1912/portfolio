

  import { type SkillsShowcaseProps } from "@/app/components/home/SkillsList";
  
  // Languages
  import HtmlSvg from "@/public/icons/html.svg";
  import CsssSvg from "@/public/icons/css.svg";
  import JavaSvg from "@/public/icons/java.svg";
  import JavascriptSvg from "@/public/icons/javascript.svg";
  import TypescriptSvg from "@/public/icons/typescript.svg";
  
  // Libraries
  import FramerSvg from "@/public/icons/framer.svg";
  import NextSvg from "@/public/icons/nextjs.svg";
  import ReactRouterDomSvg from "@/public/icons/react-router.svg";

  import ReactjsSvg from "@/public/icons/reactjs.svg";
  import ReduxSvg from "@/public/icons/redux.svg";
  import TailwindcssSvg from "@/public/icons/tailwindcss.svg";
  import ViteSvg from "@/public/icons/vite.svg";
  import SocketIoSvg from "@/public/icons/socket-io.svg";
  
  // Backend
  import NodejsSvg from "@/public/icons/nodejs.svg";
  import ExpressSvg from "@/public/icons/express.svg";
  
  // Database and ORMS
  import MongoDBSvg from "@/public/icons/mongodb.svg";
  
  // Tools and Tech
  import GitSvg from "@/public/icons/git.svg";
  import FireBaseSvg from "@/public/icons/firebase.svg";
  import PostmanSvg from "@/public/icons/postman.svg";
  
  export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
    {
      sectionName: "Languages",
      skills: [
        {
          name: "HTML",
          icon: HtmlSvg,
        },
        {
          name: "CSS",
          icon: CsssSvg,
        },
        {
          name: "Javascript",
          icon: JavascriptSvg,
        },
        {
          name: "Typescript",
          icon: TypescriptSvg,
        },
        
      ],
    },
    {
      sectionName: "Libraries and Frameworks",
      skills: [
        {
          name: "Reactjs",
          icon: ReactjsSvg,
        },
        {
          name: "Nextjs",
          icon: NextSvg,
        },
        {
          name: "React Router Dom",
          icon: ReactRouterDomSvg,
        },
        {
          name: "Framer Motion",
          icon: FramerSvg,
        },
        {
          name: "Redux",
          icon: ReduxSvg,
        },
        {
          name: "Tailwindcss",
          icon: TailwindcssSvg,
        },
        
        {
          name: "Vite",
          icon: ViteSvg,
        },
        
      ],
    },
    {
      sectionName: "Backend",
      skills: [
        {
          name: "Nodejs",
          icon: NodejsSvg,
        },
        {
          name: "Express",
          icon: ExpressSvg,
        },
        {
          name: "Socket.io",
          icon: SocketIoSvg,
        },
        {
            name: "MongoDB",
            icon: MongoDBSvg,
          },
      ],
    },
    {
      sectionName: "Tools and Technologies",
      skills: [
        {
          name: "Git",
          icon: GitSvg,
        },
        {
          name: "Firebase",
          icon: FireBaseSvg,
        },
        {
          name: "Postman",
          icon: PostmanSvg,
        },
      ],
    },
  ];