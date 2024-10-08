import React from 'react'
import AboutSection from '../components/about/AboutSection'
import ExperienceShowcaseList from '../components/about/education-showcase'
import { EDUCATION } from '../data/Education'
const page = () => {
  return (
    <div>
        <AboutSection/>
        <ExperienceShowcaseList  title='Education' details={EDUCATION}/>
      
    </div>
  )
}

export default page
