import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";

const PortfolioItem = ({
   title,
   img,
   exp,
}) => {
   const [animation, setAnimation] = useState(false);
   let navigate = useNavigate();

   return (
      <div
         className="portfolio-item"
         onClick={() => {
            navigate("./portfolio");
         }}
         onMouseEnter={() => {
            setAnimation(true);
         }}
         onMouseLeave={() => {
            setAnimation(false);
         }}
      >
         <div className="image-wrapper">
            <img
               className={animation ? "animation" : null}
               src={img}
               alt="todo"
            />
         </div>

         <div className="item-content">
            <h3 className="h3-size">{title}</h3>
            <p className="paragraph">{exp} </p>

            <div className="read-case-study">
               <div>Read case study</div>
               <img
                  className={animation ? "animation" : null}
                  src="https://assets.website-files.com/61129bb2ecedf803564c68ec/61155e76b0500d608ffb874e_arrow-personal-x-template.svg"
                  alt="right-arrow"
               />
            </div>
         </div>
      </div>
   );
};

export default PortfolioItem;
