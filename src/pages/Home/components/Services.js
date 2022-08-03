import React from 'react'
import "./styles/Services.scss"

const Services = () => {
   return (
      <div className='services'>
         <div className='content'>
            <h2>My services</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus mattis nunc aliquam tincidunt est non. Viverra nec eu.</p>
         </div>

         {/* item */}
         <div className="items">
            <div className="item">
               <img src="https://assets.website-files.com/61129bb2ecedf803564c68ec/6112ae8b813c8f4ed9b43594_service-1-personal-x-template.svg" alt="i" />
               <div className="item-content">
                  <h3>Web Design</h3>
                  <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut iaculis viverra mollis nisl dole dolorili tincidunt. Integer eget vitae id tortor.
                  </p>
               </div>
            </div>

            {/* item */}
            <div className="item">
               <img src="https://assets.website-files.com/61129bb2ecedf803564c68ec/6112ae8b8dd274078a715c01_service-2-personal-x-template.svg" alt="f" />
               <div className="item-content">
                  <h3>UI / UX Design</h3>
                  <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut iaculis viverra mollis nisl dole dolorili tincidunt. Integer eget vitae id tortor.
                  </p>
               </div>
            </div>

            {/* item */}
            <div className="item">
               <img src="https://assets.website-files.com/61129bb2ecedf803564c68ec/6112ae8b908a1cfb9816fd8c_service-3-personal-x-template.svg" alt="l" />
               <div className="item-content">
                  <h3>Product Design</h3>
                  <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut iaculis viverra mollis nisl dole dolorili tincidunt. Integer eget vitae id tortor.
                  </p>
               </div>
            </div>

            {/* item */}
            <div className="item">
               <img src="https://assets.website-files.com/61129bb2ecedf803564c68ec/6112ae8b7c74be889e7f3156_service-4-personal-x-template.svg" alt="c" />
               <div className="item-content">
                  <h3>Web Development</h3>
                  <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut iaculis viverra mollis nisl dole dolorili tincidunt. Integer eget vitae id tortor.
                  </p>
               </div>
            </div>
            
         </div>
      </div>
   )
}

export default Services