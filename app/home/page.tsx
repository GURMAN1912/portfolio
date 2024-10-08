import React from 'react'
import HeroSection from '../components/home/HeroSection'
import { PROJECT_SHOWCASE } from '../data/project'
import ProjectShowcase from '../components/project/projext-showcase'
import SkillsShowcase from '../components/home/SkillsList'

const Homepage = () => {
  return (
    <div >
        <HeroSection/>
        <SkillsShowcase />
        <ProjectShowcase projects={PROJECT_SHOWCASE}/>
    </div>
  )
}

export default Homepage
