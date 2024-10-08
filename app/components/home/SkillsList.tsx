"use client";
import { AnimatePresence } from "framer-motion";
import SkillPill, { type SkillPillProps } from "./SkillsPill";
import FadeRight from "../animation/fade-right";
import HtmlSvg from "@/public/icons/html.svg";
import CsssSvg from "@/public/icons/css.svg";
import JavaSvg from "@/public/icons/java.svg";
import JavascriptSvg from "@/public/icons/javascript.svg";
import TypescriptSvg from "@/public/icons/typescript.svg";
import FramerSvg from "@/public/icons/framer.svg";
import NextSvg from "@/public/icons/nextjs.svg";
import ReactRouterDomSvg from "@/public/icons/react-router.svg";
import ReactjsSvg from "@/public/icons/reactjs.svg";
import ReduxSvg from "@/public/icons/redux.svg";
import TailwindcssSvg from "@/public/icons/tailwindcss.svg";
import ViteSvg from "@/public/icons/vite.svg";
import SocketIoSvg from "@/public/icons/socket-io.svg";
import NodejsSvg from "@/public/icons/nodejs.svg";
import ExpressSvg from "@/public/icons/express.svg";
import MongoDBSvg from "@/public/icons/mongodb.svg";
import GitSvg from "@/public/icons/git.svg";
import FireBaseSvg from "@/public/icons/firebase.svg";
import PostmanSvg from "@/public/icons/postman.svg";
import { useScreenBreakpoint } from "@/app/utils/useScreenBrackPoint";
import { useDebounceValue } from "@/app/utils/useDebounceValue";

const skills: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Languages",
    skills: [
      { name: "HTML", icon: HtmlSvg },
      { name: "CSS", icon: CsssSvg },
      { name: "Java", icon: JavaSvg },
      { name: "Javascript", icon: JavascriptSvg },
      { name: "Typescript", icon: TypescriptSvg },
    ],
  },
  {
    sectionName: "Libraries and Frameworks",
    skills: [
      { name: "Reactjs", icon: ReactjsSvg },
      { name: "Nextjs", icon: NextSvg },
      { name: "React Router Dom", icon: ReactRouterDomSvg },
      { name: "Framer Motion", icon: FramerSvg },
      { name: "Redux", icon: ReduxSvg },
      { name: "Tailwindcss", icon: TailwindcssSvg },
      { name: "Vite", icon: ViteSvg },
    ],
  },
  {
    sectionName: "Backend",
    skills: [
      { name: "Nodejs", icon: NodejsSvg },
      { name: "Express", icon: ExpressSvg },
      { name: "Socket.io", icon: SocketIoSvg },
      { name: "MongoDB", icon: MongoDBSvg },
    ],
  },
  {
    sectionName: "Tools and Technologies",
    skills: [
      { name: "Git", icon: GitSvg },
      { name: "Firebase", icon: FireBaseSvg },
      { name: "Postman", icon: PostmanSvg },
    ],
  },
];

export interface SkillsShowcaseProps {
  skills: {
    sectionName: string;
    skills: SkillPillProps[];
  }[];
}

export default function SkillsShowcase() {
  const isMobile = useScreenBreakpoint(640);
  const isMobileDebounced = useDebounceValue(isMobile, 600);

  return (
    <section className="overflow-hidden px-6 py-32 sm:px-14 md:px-20">
      <div className="relative mx-auto max-w-7xl">
        <h2 className="text-xl font-semibold text-accent-foreground sm:text-4xl">
          Skills
        </h2>
        {skills.map((section) => (
          <div key={section.sectionName} className="mt-4">
            <span className="text-xs font-semibold text-accent-foreground sm:text-sm">
              {section.sectionName}
            </span>
            <div className="mt-2 flex flex-wrap gap-4 text-xl text-black">
              <AnimatePresence>
                {section.skills.map((pill, index) => (
                  <FadeRight
                    key={`lang-${index}`}
                    duration={0.4}
                    delay={0.1 + index * 0.1}
                    whileInView={!isMobileDebounced}
                    className="-z-20"
                  >
                    <SkillPill {...pill} />
                  </FadeRight>
                ))}
              </AnimatePresence>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
