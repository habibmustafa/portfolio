import React from "react";
import "./style.scss";
import Logo from "../Logo";
import { Link } from "react-router-dom";

const Footer = () => {
   return (
      <div className="footer" data-aos="fade-zoom-in" data-aos-offset="100">
         <div className="container">
            {/* main */}
            <div className="footer-wrapper">
               <div className="footer-main">
                  <Logo />
                  <p className="paragraph">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Lectus mattis nunc aliquam tincidunt est non.
                  </p>
                  <div className="social-links">
                     <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.facebook.com/"
                     >
                        <img
                           src="https://assets.website-files.com/61129bb2ecedf803564c68ec/6113faa8cc3d9f214b895d53_footer-social-icon-facebook-personal-x-webflow-template-brix-templates.svg"
                           alt="facebook"
                        />
                     </a>
                     <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://twitter.com/"
                     >
                        <img
                           src="https://assets.website-files.com/61129bb2ecedf803564c68ec/6113faa85fe675e09a564e6c_footer-social-icon-twitter-personal-x-webflow-template-brix-templates.svg"
                           alt="twitter"
                        />
                     </a>
                     <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.instagram.com/hebib_mustafa/"
                     >
                        <img
                           src="https://assets.website-files.com/61129bb2ecedf803564c68ec/6113faa85e920806254e09e1_footer-social-icon-instagram-personal-x-webflow-template-brix-templates.svg"
                           alt="instagram"
                        />
                     </a>
                     <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/habibmustafa/"
                     >
                        <img
                           src="https://assets.website-files.com/61129bb2ecedf803564c68ec/6113faa88435d26a26cea072_footer-social-icon-linkedin-personal-x-webflow-template-brix-templates.svg"
                           alt="linkedIn"
                        />
                     </a>
                     <a target="_blank" rel="noreferrer" href="https://wa.me/+994516002230">
                        <img
                           src="https://assets.website-files.com/61129bb2ecedf803564c68ec/6113faa8a79ad96887a4f019_footer-social-icon-whatsapp-personal-x-webflow-template-brix-templates.svg"
                           alt="whatsapp"
                        />
                     </a>
                  </div>
               </div>

               {/* Nav wrapper */}
               <div className="footer-nav-wrapper">
                  <div className="pages">
                     <h4 className="h4-size">Pages</h4>
                     <ul>
                        <li>
                           <Link to="/">Home</Link>
                        </li>
                        <li>
                           <Link to="/about">About</Link>
                        </li>
                        <li>
                           <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                           <Link to="/portfolio">Portfolio</Link>
                        </li>
                        <li>
                           <Link to="/">
                              <u>
                                 <b>More...</b>
                              </u>
                           </Link>
                        </li>
                     </ul>
                  </div>

                  <div className="utility-pages">
                     <h4 className="h4-size">Utility Pages</h4>
                     <ul>
                        <li>
                           <Link to="/404">404 Not Found</Link>
                        </li>
                        <li>
                           <Link to="/401">Password Protected</Link>
                        </li>
                        <li>
                           <Link to="/">
                              <u>
                                 <b>Browse More Temp...</b>
                              </u>
                           </Link>
                        </li>
                     </ul>
                  </div>

                  <div className="contact-me">
                     <h4 className="h4-size">Contact Me</h4>
                     <ul>
                        <li>
                           <a
                              href="mailto:hebibullahmustafazade@gmail.com"
                              className="email"
                           >
                              <img
                                 src="https://assets.website-files.com/61129bb2ecedf803564c68ec/6112a4fa0865622bd03376a4_email-icon-personal-x-template.svg"
                                 alt="mail"
                              />
                              <div>me@gmail.com</div>
                           </a>
                        </li>
                        <li>
                           <a href="tel:+994516002230">
                              <img
                                 src="https://assets.website-files.com/61129bb2ecedf803564c68ec/6113f866488b09519c802b88_phone-icon-personal-x-webflow-template-brix-templates.svg"
                                 alt="tel"
                              />
                              <div>(+994) 51 600-22-30</div>
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>

            {/* bottom */}
            <div className="footer-bottom">
               <p className="paragraph">
                  Copyright © You X | Designed by BRIX Templates - Powered by
                  Webflow
               </p>
            </div>
         </div>
      </div>
   );
};

export default Footer;
