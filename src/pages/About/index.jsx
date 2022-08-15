import React from "react";
import "./style.scss"

const About = () => {
   return (
      <div className="about">
         <div className="container">
            <div className="intro">
               <div className="pic" data-aos="fade-zoom-in" data-aos-delay="250">
                  <img
                     src="https://assets.website-files.com/61129bb2ecedf803564c68ec/6113fef6fd44a261b8498282_hero-about-image-personal-x-template.jpg"
                     alt="me"
                  />
               </div>

               <div className="content" data-aos="fade-zoom-in" data-aos-delay="50">
                  <h1 className="h1-size">
                     I’m Habib Mustafa, a Product and Web Designer
                  </h1>
                  <div className="line">
                     <img
                        src="https://assets.website-files.com/61129bb2ecedf803564c68ec/6112b0068db0b60858060db4_hero-underline-personal-x-template.svg"
                        alt="line"
                     />
                  </div>
                  <p className="paragraph">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Lectus mattis nunc aliquam tincidunt est non. Viverra nec
                     eu, in ridiculus egestas mi. Vulputate tristique porttitor
                     enim aliquam ullamcorper. Velit dui laoreet in et mus.
                  </p>
               </div>
            </div>
            <div className="my-story"></div>
            <div className="my-skills"></div>
         </div>
      </div>
   );
};

export default About;
