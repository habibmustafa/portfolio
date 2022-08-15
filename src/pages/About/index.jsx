import React from "react";
import "./style.scss";

const About = () => {
   return (
      <div className="about">
         <div className="container">
            <div className="intro">
               <div
                  className="pic"
                  data-aos="fade-zoom-in"
                  data-aos-delay="250"
               >
                  <img
                     src="https://assets.website-files.com/61129bb2ecedf803564c68ec/6113fef6fd44a261b8498282_hero-about-image-personal-x-template.jpg"
                     alt="me"
                  />
               </div>

               <div
                  className="content"
                  data-aos="fade-zoom-in"
                  data-aos-delay="50"
               >
                  <h1 className="h1-size">
                     I’m Habib Mustafa, <br /> a Product and Web Designer
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

            <div className="my-story">
               <div className="content" data-aos="fade-zoom-in">
                  <h2 className="h2-size">My story</h2>
                  <div className="line">
                     <img
                        src="https://assets.website-files.com/61129bb2ecedf803564c68ec/611406745e92080e404e517c_my-story-underline-personal-x-template.svg"
                        alt="line"
                     />
                  </div>
                  <p className="paragraph">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Cursus vivamus risus posuere vitae vivamus. Enim dui nibh
                     magna hac id lacus euismod mi diam. Consequat elementum
                     tincidunt egestas egestas orci. At facilisi ultrices
                     tortor, volutpat varius sit vitae rhoncus. Ut nisi, feugiat
                     leo aenean massa enim.
                  </p>

                  <h3 className="h3-size">
                     Designing since I was 16 years old
                  </h3>
                  <p className="paragraph">
                     At facilisi ultrices tortor, volutpat varius sit vitae
                     rhoncus. Ut nisi, feugiat leo aenean massa enim. Sed
                     accumsan, ac dictum tempus luctus id in porttitor dictum.
                  </p>
                  <ul className="paragraph">
                     <li>
                        Ornare lectus sit amet est placerat in egestas erat
                        imperdiet.
                     </li>
                     <li>
                        Cras tincidunt lobortis feugiat vivamus at augue eget
                        arcu dictum.
                     </li>
                     <li>Posuere mori leo urna molestie at.</li>
                  </ul>
               </div>

               <div className="images">
                  <img
                     data-aos="fade-zoom-in"
                     data-aos-delay="200"
                     src="https://assets.website-files.com/61129bb2ecedf803564c68ec/6113fef672a98d4e6ffe7c75_about-image-02-personal-x-template.jpg"
                     alt="first"
                  />
                  <img
                     data-aos="fade-zoom-in"
                     src="https://assets.website-files.com/61129bb2ecedf803564c68ec/6113fef672a98d3f18fe7c74_about-image-01-personal-x-template.jpg"
                     alt="second"
                  />
               </div>
            </div>

            <div className="my-skills">
               <div className="content" data-aos="fade-zoom-in">
                  <h2 className="h2-size">My skills & software</h2>
                  <div className="line">
                     <img
                        src="https://assets.website-files.com/61129bb2ecedf803564c68ec/61140e796ab6559a19081f84_skills-underline-personal-x-template.svg"
                        alt="line"
                     />
                  </div>
                  <p className="paragraph">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Lectus mattis nunc aliquam tincidunt est non. Viverra nec
                     eu.
                  </p>
               </div>

               <div className="skills">
                  <div className="skills-card" data-aos="fade-zoom-in">
                     <img
                        src="https://assets.website-files.com/61129bb2ecedf803564c68ec/61140f8059c9332ddb393562_skill-icon-01-personal-x-template.svg"
                        alt="design"
                     />
                     <h3 className="h3-size">Design</h3>
                     <span className="paragraph">UI/UX Design</span>
                     <span className="paragraph">Product Design</span>
                     <span className="paragraph">Web Design</span>
                     <span className="paragraph">Design Thinking</span>
                     <span className="paragraph">Branding</span>
                  </div>
                  <div
                     className="skills-card"
                     data-aos="fade-zoom-in"
                     data-aos-delay="150"
                  >
                     <img
                        src="https://assets.website-files.com/61129bb2ecedf803564c68ec/61140f802d167b3412c5a3d0_skill-icon-02-personal-x-template.svg"
                        alt="dev"
                     />
                     <h3 className="h3-size">Development</h3>
                     <span className="paragraph">HTML & CSS</span>
                     <span className="paragraph">Javascript</span>
                     <span className="paragraph">React</span>
                     <span className="paragraph">React Native</span>
                     <span className="paragraph">No Code</span>
                  </div>
                  <div
                     className="skills-card"
                     data-aos="fade-zoom-in"
                     data-aos-delay="300"
                  >
                     <img
                        src="https://assets.website-files.com/61129bb2ecedf803564c68ec/61140f8020e63656704c6b6d_skill-icon-03-personal-x-template.svg"
                        alt="tools"
                     />
                     <h3 className="h3-size">Tools</h3>
                     <span className="paragraph">Webflow</span>
                     <span className="paragraph">Figma</span>
                     <span className="paragraph">Notion</span>
                     <span className="paragraph">Photoshop</span>
                     <span className="paragraph">Illustrator</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default About;