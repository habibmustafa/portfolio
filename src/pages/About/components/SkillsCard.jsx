import React from "react";
import "./styles/SkillsCard.scss";

const SkillsCard = ({ img, title, item }) => {
   return (
      <div className="skills-card" data-aos="fade-zoom-in">
         <img src={img} alt="design" />
         <h3 className="h3-size">{title}</h3>
         <ul>
            {item.map((item, i) => (
               <li key={i} className="paragraph">
                  {item}
               </li>
            ))}
         </ul>
      </div>
   );
};

export default SkillsCard;
