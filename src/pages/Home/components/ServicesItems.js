import React from 'react'
import "./styles/Services.scss"

const ServicesItems = ({ delay, src, title, content }) => {
   return (
      <div className="item"
         data-aos="fade-zoom-in"
         data-aos-delay={delay}
      >
         <img src={src} alt="i" />
         <div className="item-content">
            <h3>{title}</h3>
            <p>{content}</p>
         </div>
      </div>
   )
}

export default ServicesItems