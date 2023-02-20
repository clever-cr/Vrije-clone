import React from 'react'
import NavBar from '../components/layout/NavBar'
import Hero from '../components/sections/Hero'
import Students from '../components/sections/Students'
import Impact from '../components/sections/Impact'
import Information from '../components/sections/Information'
import News from '../components/sections/News'
import Calendar from '../components/sections/Calendar'
import Work from '../components/sections/Work'
import Amsterdam from '../components/sections/Amsterdam'
import Look from '../components/sections/Look'
import Features from '../components/sections/Features'
const index = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Students />
      <Impact />
      <Information />
      <News />
      <Calendar />
      <Work />
      <Amsterdam />
      <Look />
      <Features />
    </div>
  )
}

export default index