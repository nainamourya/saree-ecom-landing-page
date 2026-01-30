import React from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Collection from './components/Collection'
import InfiniteSareeSlider from './components/InfiniteSareeSlider'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
 

  return (
    <>
     <Navbar/>
     <Hero/>
     <About/>
     <Collection/>
     <InfiniteSareeSlider/>
     <Testimonials/>
     <Footer/>
    </>
  )
}

export default App
