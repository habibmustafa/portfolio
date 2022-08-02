import React from 'react'
import Hero from './components/Hero'
import "./style.scss"

const Home = () => {
   return (
      <div className='home-page'>
         <div className='container'>
            {/* hero section */}
            <Hero />
            
         </div>
      </div>
   )
}

export default Home