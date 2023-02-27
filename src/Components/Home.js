import React from 'react'
import CTASection from './CTASection'
import Footer from './Footer'
import { HeroSection } from './HeroSection'
import How from './How'
import Meals from './Meals'
import Pricing from './Pricing'
import Testimonials from './Testimonials'

const Home = () => {
  return (
    <>
      <HeroSection/>
      <How/>
        <Meals/>
        <Testimonials/>
        <Pricing/>
        <CTASection/>
        <Footer/>
    </>
  )
}

export default Home
