import React from "react";
import PortfolioItem from "../../components/PortfolioItem";
import "./style.scss";

const Portfolio = () => {
   return (
      <div className="portfolio">
         <div className="container">
            <h1 className="h1-size">Portfolio</h1>

            <div className="items">
               <PortfolioItem />
               <PortfolioItem />
               <PortfolioItem />
               <PortfolioItem />
            </div>
         </div>
      </div>
   );
};

export default Portfolio;
