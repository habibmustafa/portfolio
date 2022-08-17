import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";

const Protected = () => {
   const navigate = useNavigate();

   const sendPassword = (e) => {
      e.preventDefault();
      navigate("../404");
   };
   return (
      <div className="protected">
         <div className="container">
            <div className="content">
               <form className="auth" onSubmit={sendPassword}>
                  <h2
                     className="h2-size"
                     data-aos="fade-zoom-in"
                     data-aos-delay="0"
                  >
                     Protected Page
                  </h2>
                  <div
                     className="line"
                     data-aos="fade-zoom-in"
                     data-aos-delay="0"
                  >
                     <img
                        src="https://assets.website-files.com/61129bb2ecedf803564c68ec/6112bdfb2b341387dfa368b4_portfolio-underline-personal-x-template.svg"
                        alt="line"
                     />
                  </div>
                  <p
                     className="paragraph"
                     data-aos="fade-zoom-in"
                     data-aos-delay="100"
                  >
                     This page is password protected. If you are the website
                     admin, or have access to this page, please type your
                     password below.
                  </p>
                  <label data-aos="fade-zoom-in" data-aos-delay="200">
                     <input type="password" placeholder="Enter your password" required/>
                  </label>
                  <label data-aos="fade-zoom-in" data-aos-delay="300">
                     <input
                        className="button"
                        type="submit"
                        value="Enter now"
                     />
                  </label>
               </form>
            </div>
         </div>
      </div>
   );
};

export default Protected;
