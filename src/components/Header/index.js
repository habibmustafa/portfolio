import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'
import "./style.scss"

const Header = () => {
   const [menuButton, setMenuButton] = useState(window.innerWidth < 992 ? true : false)
   const [handleMenu, sethandleMenu] = useState(false)

   const handleResize = () => {
      window.innerWidth < 992 ? setMenuButton(true) : setMenuButton(false)
      if (window.innerWidth > 991) {
         sethandleMenu(false)
      }
   }

   useEffect(() => {
      window.addEventListener('resize', handleResize)

      return () => {
         window.removeEventListener('resize', handleResize)
      }
   }, [menuButton])

   return (
      <div className='header'>
         <div className='header-wrapper'>
            <div className='container' data-aos="fade-zoom-in">
               <div className='header-logo'><Logo /></div>
               {menuButton || <ul className="nav-item">
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/about'>About</Link></li>
                  <li><Link to='/portfolio'>Portfolio</Link></li>
                  <li><Link to='/contact'>Contact</Link></li>
               </ul>}
               <div>
                  <a href='mailto:hebibullahmustafazade@gmail.com' className="email">
                     <img src="https://assets.website-files.com/61129bb2ecedf803564c68ec/6112a4fa0865622bd03376a4_email-icon-personal-x-template.svg" alt="m" />
                     <div>me@gmail.com</div>
                  </a>
               </div>

               {/* hamburger menu */}
               {menuButton &&
                  <div className={`nav-menu ${handleMenu && 'active'}`} onClick={() => sethandleMenu(!handleMenu)}>
                     <span></span>
                     <span></span>
                     <span></span>
                  </div>}
            </div>
         </div>

         {/* helelik bele qalsin */}
         <div className="nav-overlay" style={{ display: menuButton ? 'block' : 'none' }}>
            {/*  style={{display: handleMenu ? 'block': 'none'}} */}
            <ul className={`nav-item-overlay ${handleMenu && 'active'}`}>
               <li><Link onClick={() => {sethandleMenu(false)}} to='/'>Home</Link></li>
               <li><Link onClick={() => {sethandleMenu(false)}} to='/about'>About</Link></li>
               <li><Link onClick={() => {sethandleMenu(false)}} to='/portfolio'>Portfolio</Link></li>
               <li><Link onClick={() => {sethandleMenu(false)}} to='/contact'>Contact</Link></li>
            </ul>
         </div>

      </div>
   )
}

export default Header