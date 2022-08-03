import React from 'react'
import { NavLink } from 'react-router-dom'
import "./style.scss"

const Header = () => {
   return (
      <div className='container header-container' data-aos="fade-zoom-in">
         <div className="logo">
            <NavLink to="/">
               <img src="https://assets.website-files.com/61129bb2ecedf803564c68ec/612a715b08e8df7a8419c063_logo-you-x-webflow-template.svg" alt="logo" />
            </NavLink>
         </div>
         <ul className="nav-item">
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/portfolio'>Portfolio</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
         </ul>
         <div>
            <a href='mailto:hebibullahmustafazade@gmail.com' className="email">
               <img src="https://assets.website-files.com/61129bb2ecedf803564c68ec/6112a4fa0865622bd03376a4_email-icon-personal-x-template.svg" alt="m" />
               <div>hebibullahmustafazade@gmail.com</div>
            </a>
         </div>
      </div>
   )
}

export default Header