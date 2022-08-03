import React from 'react'
import { NavLink } from 'react-router-dom'
import "./styles/Hero.scss"

const Hero = () => {
   return (
      <div className='hero'>
         <div className="hero-content">
            <h3 className='subtitle'>Hey, I’m Habib Mustafa</h3>
            <h1 className='hero-title'>I enjoy designing tech websites and digital products</h1>
            <div className='line'>
               <img src="https://assets.website-files.com/61129bb2ecedf803564c68ec/6112b0068db0b60858060db4_hero-underline-personal-x-template.svg" alt="line" />
            </div>
            <div className='get-button'>
               <NavLink to='/contact'>Get in touch</NavLink>
            </div>
         </div>

         {/* image section */}
         <div className="hero-image">
            <img src="https://assets.website-files.com/61129bb2ecedf803564c68ec/6112af58d6338c4181aaed8c_hero-image-personal-x-template.png" alt="me" />
         </div>
      </div>
   )
}

export default Hero