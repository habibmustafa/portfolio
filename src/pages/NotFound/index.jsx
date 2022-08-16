import React from "react";
import "./style.scss";
import Button from "../../components/Button";

const NotFound = () => {
   return (
      <div className="not-found">
         <div className="content">
            <div className="container">
               <div className="text-center">
                  <div
                     className="title-404"
                     data-aos="fade-zoom-in"
                     data-aos-delay="50"
                  >
                     404
                  </div>
                  <h2
                     className="h2-size"
                     data-aos="fade-zoom-in"
                     data-aos-delay="150"
                  >
                     Page Not Found
                  </h2>
                  <p
                     className="paragraph"
                     data-aos="fade-zoom-in"
                     data-aos-delay="250"
                  >
                     The page you are looking for doesn't exist or has been
                     moved.
                  </p>
                  <div
                     className="get-button"
                     data-aos="fade-zoom-in"
                     data-aos-delay="350"
                  >
                     <Button to="/" title="Go Home" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default NotFound;
