import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'
import "./style.scss"

const Header = () => {
   return (
      <div className='container header-container' data-aos="fade-zoom-in">
         <Logo />
         <ul className="nav-item">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/portfolio'>Portfolio</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
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