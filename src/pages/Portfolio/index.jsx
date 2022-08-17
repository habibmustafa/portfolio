import React from "react";
import PortfolioItem from "../../components/PortfolioItem";
import { Projects } from "../../data/Projects";
import "./style.scss";

const Portfolio = () => {
   return (
      <div className="portfolio">
         <div className="container">
            <h1 className="h1-size" data-aos="fade-zoom-in" data-aos-delay="50">Portfolio</h1>

            <div className="items" data-aos="fade-zoom-in" data-aos-delay="250">
               {Projects.map((item,i) => (
                  <PortfolioItem key={i} {...item}/>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Portfolio;
