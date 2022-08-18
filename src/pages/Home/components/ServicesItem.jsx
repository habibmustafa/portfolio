import React from "react";
import "./styles/ServicesItem.scss";
import "../../../scss/_variables.scss";

const ServicesItem = ({ delay, img, title, content }) => {
   return (
      <div className="item" data-aos="fade-zoom-in" data-aos-delay={delay}>
         <div className="service-icon">
            <img src={img} alt="icon" />
         </div>
         <div className="item-content">
            <h3 className="h3-size">{title}</h3>
            <p className="paragraph">{content}</p>
         </div>
      </div>
   );
};

export default ServicesItem;
