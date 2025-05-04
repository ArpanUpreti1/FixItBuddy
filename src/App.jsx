import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Hero/Header'
import React from 'react'
import HeroSection from './Components/Hero/HeroSection'
import Services from './Components/Services/Services'
import Banner from './Components/Banner/Banner'

function App() {

  return (
    <>
      <div className='h-full'> 
        <HeroSection/>
        <Services/>
        <Banner/>
      </div>
    </>
  )
}

export default App
