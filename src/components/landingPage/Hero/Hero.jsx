import React from 'react'
import Navbar from './Navbar'
import waveBg from './../images/hero-bg.svg'
import Header from './Header'

export default function Hero() {
  return (
    <div className='heroSection' id='toHero' 
        style={{backgroundImage:`url(${waveBg})`, backgroundRepeat:"no-repeat"}}>
        <Navbar />
        <Header />
    </div>
  )
}
