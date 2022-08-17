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
                  >
                     404
                  </div>
                  <h2
                     className="h2-size"
                     data-aos="fade-zoom-in"
                     data-aos-delay="100"
                  >
                     Page Not Found
                  </h2>
                  <p
                     className="paragraph"
                     data-aos="fade-zoom-in"
                     data-aos-delay="200"
                  >
                     The page you are looking for doesn't exist or has been
                     moved.
                  </p>
                  <div
                     className="get-button"
                     data-aos="fade-zoom-in"
                     data-aos-delay="300"
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
