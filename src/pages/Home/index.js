import React from 'react'
import "./style.scss"
import Button from '../../components/Button'
import ServicesItem from './components/ServicesItem'
import PortfolioItem from './components/PortfolioItem'

const Home = () => {

   return (
      <div className='home-page'>
         <div className='container'>

            {/* Hero section */}
            <div className='hero'>
               <div className="hero-content"
                  data-aos="fade-zoom-in"
                  data-aos-delay="100"
               >
                  <h3 className='subtitle'>Hey, I’m Habib Mustafa</h3>
                  <h1 className='hero-title'>I enjoy designing tech websites and digital products</h1>
                  <div className='line'>
                     <img src="https://assets.website-files.com/61129bb2ecedf803564c68ec/6112b0068db0b60858060db4_hero-underline-personal-x-template.svg" alt="line" />
                  </div>

                  {/* button component */}
                  <div className='get-button'>
                     <Button to="/contact" title="Get in touch" />
                  </div>
               </div>

               {/* image section */}
               <div className="hero-image"
                  data-aos="fade-zoom-in"
                  data-aos-delay="300"
               >
                  <img src="https://assets.website-files.com/61129bb2ecedf803564c68ec/6112af58d6338c4181aaed8c_hero-image-personal-x-template.png" alt="me" />
               </div>
            </div>

            {/* Services section */}
            <div className='services'>
               <div className='content' data-aos="fade-zoom-in">
                  <h2 className='title'>My services</h2>
                  <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus mattis nunc aliquam tincidunt est non. Viverra nec eu.</p>
               </div>

               <div className="items">

                  {/* item components */}
                  <ServicesItem
                     delay="0"
                     src="https://assets.website-files.com/61129bb2ecedf803564c68ec/6112ae8b813c8f4ed9b43594_service-1-personal-x-template.svg"
                     title="HTML&CSS Responsive Web Design"
                     content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut iaculis viverra mollis nisl dole dolorili tincidunt. Integer eget vitae id tortor."
                  />
                  <ServicesItem
                     delay="150"
                     src="https://assets.website-files.com/61129bb2ecedf803564c68ec/6112ae8b8dd274078a715c01_service-2-personal-x-template.svg"
                     title="Javascript Development"
                     content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut iaculis viverra mollis nisl dole dolorili tincidunt. Integer eget vitae id tortor."
                  />
                  <ServicesItem
                     delay="0"
                     src="https://assets.website-files.com/61129bb2ecedf803564c68ec/6112ae8b908a1cfb9816fd8c_service-3-personal-x-template.svg"
                     title="React JS Development"
                     content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut iaculis viverra mollis nisl dole dolorili tincidunt. Integer eget vitae id tortor."
                  />
                  <ServicesItem
                     delay="150"
                     src="https://assets.website-files.com/61129bb2ecedf803564c68ec/6112ae8b7c74be889e7f3156_service-4-personal-x-template.svg"
                     title="Node.js Development (basic)"
                     content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut iaculis viverra mollis nisl dole dolorili tincidunt. Integer eget vitae id tortor."
                  />

               </div>

               {/* button component */}
               <div className='get-button' data-aos="fade-zoom-in">
                  <Button to="/contact" title="Get in touch" />
               </div>
            </div>

            {/* About-me section */}
            <div className="about-me">
               <div className="about-image" data-aos="fade-zoom-in">
                  <img src="https://assets.website-files.com/61129bb2ecedf803564c68ec/6112b5031b9bac7e65bfa8d1_home-about-personal-x-template.jpg" alt="about" />
               </div>

               <div className="about-content" data-aos="fade-zoom-in" data-aos-delay="300">
                  <h2 className='title'>About me</h2>
                  <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus mattis nunc aliquam tincidunt est non. Viverra nec eu, in ridiculus egestas mi. Vulputate tristique porttitor enim aliquam ullamcorper. Velit dui laoreet in et mus.</p>
                  <div className='get-button'>
                     <Button to="/about" title="More about me" />
                  </div>
               </div>
            </div>

            {/* My-resume section */}
            {/* <div className="my-resume">
               <div className="my-resume-header">
                  <h2 className='title'>Take a look at my resume</h2>
                  <div className='get-button' data-aos="fade-zoom-in">
                     <Button to="/about" title="See full resume" />
                  </div>
               </div>

               <div className="items">

               </div>
            </div> */}

            <div className="take-portfolio">
               <div className="header">
                  <div className='header-content'>
                     <h2 className='title'>Take a look at my design portfolio</h2>
                     <img src="https://assets.website-files.com/61129bb2ecedf803564c68ec/6112bdfb2b341387dfa368b4_portfolio-underline-personal-x-template.svg" alt="line" />
                  </div>
                  <Button to="/about" title="More about me" />
               </div>

               <div className="portfolio-items">
                  <PortfolioItem />
               </div>
            </div>

         </div >
      </div >
   )
}

export default Home