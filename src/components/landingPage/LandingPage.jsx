import React from 'react'
import About from './About'
import Contact from './Contact'
import Hero from './Hero/Hero'
import Services from './Services'
import { Link } from 'react-router-dom'

export default function LandingPage() {
  React.useEffect( () => {
    document.title = "Algorithm Visualizer";
  }, [])
  return (
    <div className='landingPage-container'>
        <Hero />
        <Link to="/code-editor"> Code editor </Link>
        <Link to='/online-ide'>Online IDE</Link>
        <Services />
        <About />
        <Contact />
    </div>
  )
}
