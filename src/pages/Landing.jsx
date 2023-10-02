import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Home from '../components/Home'
import Popular from '../components/Popular'
import Testimonials from '../components/Testimonials'


function Landing() {
  return (
    <div>
        <Navbar/>
        <Home/>
        <Popular/>
        <Testimonials/>
        <Footer/>
    </div>
  )
}

export default Landing