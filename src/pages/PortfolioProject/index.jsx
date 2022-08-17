import React from "react";
import "./style.scss";
import { Projects } from "../../data/Projects";
import { useParams } from "react-router-dom";

const PortfolioProject = () => {
   const { name } = useParams();

   let project = null;
   Projects.find((item) =>
      item.title === name ? (project = item) : (project = false)
   );

   return (
      <div className="portfolio-project">
         <div className="container">
            <div className="intro">
               <div className="top-content" data-aos="fade-zoom-in" data-aos-delay="50">
                  <div className="time paragraph">-July 2021</div>
                  <h1 className="h1-size">{project.title}</h1>

                  <div className="split">
                     <div className="split-item">
                        <h2 className="h4-size">Expertise</h2>
                        <div className="paragraph">{project.expertise}</div>
                     </div>
                     <div className="split-item">
                        <h2 className="h4-size">Platforms</h2>
                        <div className="paragraph">{project.platforms}</div>
                     </div>
                     <div className="split-item">
                        <h2 className="h4-size">Deliverables</h2>
                        <div className="paragraph">{project.deliverables}</div>
                     </div>
                     <div className="split-item">
                        <h2 className="h4-size">Website</h2>
                        <a className="paragraph" href={project.website}>
                           Visit website
                        </a>
                     </div>
                  </div>
               </div>

               <div className="image" data-aos="fade-zoom-in" data-aos-delay="250">
                  <img src={project.img} alt="project" />
               </div>
            </div>

            <div className="section" data-aos="fade-zoom-in">
               <div className="title">
                  <h2 className="h2-size">Project Overview</h2>
               </div>
               <div className="content">
                  <p className="paragraph">{project.overview}</p>
                  <div className="image">
                     <img src={project.img2} alt="overview" />
                  </div>
               </div>
            </div>

            {/* helelik */}
            <div className="section" data-aos="fade-zoom-in">
               <div className="title">
                  <h2 className="h2-size">Execution</h2>
               </div>
               <div className="content">
                  <p className="paragraph">
                     Egestas dui id ornare arcu odio. Ornare lectus sit amet est
                     placerat in egestas erat imperdiet. Aenean vel elit
                     scelerisque mauris pellentesque pulvinar. Mauris a diam
                     maecenas sed enim ut sem viverra.
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default PortfolioProject;
