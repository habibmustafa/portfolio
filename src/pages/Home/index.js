import React from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import "./style.scss"

const Home = () => {
   return (
      <div className='home-page'>
         <div className='container'>
            {/* hero section */}
            <Hero />
            <Services />
            
         </div>
      </div>
   )
}

export default Home