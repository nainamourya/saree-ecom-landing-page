import React from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Collection from './components/Collection'
import InfiniteSareeSlider from './components/InfiniteSareeSlider'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import FAQ from './components/FAQ'

function App() {
 

  return (
    <>
     <Navbar/>
     <Hero/>
     <About/>
     <Collection/>
     <InfiniteSareeSlider/>
     <Testimonials/>
     <FAQ/>
     <Footer/>
    </>
  )
}

export default App
