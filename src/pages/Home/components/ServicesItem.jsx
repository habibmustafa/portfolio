import React from "react";
import "./styles/ServicesItem.scss";

const ServicesItem = ({ delay, src, title, content }) => {
   return (
      <div className="item" data-aos="fade-zoom-in" data-aos-delay={delay}>
         <img src={src} alt="i" />
         <div className="item-content">
            <h3 className="h3-size">{title}</h3>
            <p className="paragraph">{content}</p>
         </div>
      </div>
   );
};

export default ServicesItem;