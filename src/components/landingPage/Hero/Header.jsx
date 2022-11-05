import React from 'react'
import headerImg from './../images/hero-img.svg'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='hero-headerSection'>
        <div className="headerLeftSection">
            <div className="headerLeft-upperPart">
                Algorithm Visualizer
            </div>

            <div className="headerLeft-lowerPart">
                Cause who likes to understand Quick Sort from books.
            </div>

            <Link to = "/algos" className="headerLeft-linkPart" >
                Start Visualizing 
            </Link>
        </div>
        <div className="headerRightSection">
            <img src={headerImg} alt="" />
        </div>
    </div>
  )
}