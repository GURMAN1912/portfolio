"use client";
import React from 'react'
import { PROJECTS_CARD } from '../data/project'
import ProjectCard from '../components/project/project-card'

const page = () => {
  return (
    <div>
      <section className="mx-auto mb-40 mt-6 w-full gap-20 px-6 sm:mt-12 sm:px-14 md:px-20">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-2xl font-semibold text-accent-foreground md:text-6xl">
            Projects
          </h1>
          <div className="my-2">
            <span className="text-sm text-muted-foreground">
              Here are some of the projects I&apos;d like to share
            </span>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2">
            {PROJECTS_CARD.map((card, index) => (
              <ProjectCard key={index} {...card} />
            ))}
          </div>
          <div className="mx-auto mt-16 max-w-5xl text-center text-foreground md:mt-28">
            <span className="text-xl font-bold md:text-2xl">
              I am currently building new projects and learning Nextjs
               to expand my skill set .
            </span>
            <p className="mt-10 text-base md:text-xl">
              Visit my github to see some of the latest projects{" "}
              <a
                href={`https://github.com/GURMAN1912`}
                target="_blank"
                className="font-semibold text-accent-foreground underline underline-offset-2 hover:text-accent-foreground/70"
              >
                Github
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default page
