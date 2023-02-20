import React from 'react'
import NavBar from '../components/layout/NavBar'
import Hero from '../components/sections/Hero'
import Students from '../components/sections/Students'
import Impact from '../components/sections/Impact'

const index = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Students />
      <Impact />
    </div>
  )
}

export default index