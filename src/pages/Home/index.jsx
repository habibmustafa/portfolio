import React, { useRef } from "react";
import "./style.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "../../components/Button";
import ServicesItem from "./components/ServicesItem";
import PortfolioItem from "./components/PortfolioItem";
import {
   MdOutlineArrowBackIos,
   MdOutlineArrowForwardIos,
} from "react-icons/md";
import Me from "../../assets/me.jpg";
import { Services } from "../../data/Services";

const Home = () => {
   const sliderRef = useRef();

   let settings = {
      infinite: true,
      speed: 600,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
         {
            breakpoint: 992,
            settings: {
               initialSlide: false,
               slidesToShow: 2,
               slidesToScroll: 1,
            },
         },
         {
            breakpoint: 768,
            settings: {
               initialSlide: 0,
               slidesToShow: 1,
               slidesToScroll: 1,
            },
         },
      ],
   };

   return (
      <div className="home-page">
         <div className="container">
            {/* Hero section */}
            <div className="hero">
               <div
                  className="hero-content"
                  data-aos="fade-zoom-in"
                  data-aos-delay="50"
               >
                  <h3 className="h3-size">Hey, I’m Habib Mustafa</h3>
                  <h1 className="h1-size">
                     I enjoy developing tech websites, <br />{" "}
                     <span className="web-developer">Web Developer</span>
                  </h1>
                  <div className="line">
                     <img
                        src="https://assets.website-files.com/61129bb2ecedf803564c68ec/6112b0068db0b60858060db4_hero-underline-personal-x-template.svg"
                        alt="line"
                     />
                  </div>

                  {/* button component */}
                  <div className="get-button">
                     <Button to="/contact" title="Get in touch" />
                  </div>
               </div>

               {/* image section */}
               <div
                  className="hero-image"
                  data-aos="fade-zoom-in"
                  data-aos-delay="250"
               >
                  <img src={Me} alt="me" />
               </div>
            </div>

            {/* Services section */}
            <div className="services">
               <div className="content" data-aos="fade-zoom-in">
                  <h2 className="h2-size">My services</h2>
                  <p className="paragraph">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Lectus mattis nunc aliquam tincidunt est non. Viverra nec
                     eu.
                  </p>
               </div>

               <div className="items">
                  {/* item components */}
                  {Services.map((item, i) => (
                     <ServicesItem key={i} {...item} />
                  ))}
               </div>

               {/* button component */}
               <div className="get-button" data-aos="fade-zoom-in">
                  <Button to="/contact" title="Get in touch" />
               </div>
            </div>

            {/* About-me section */}
            <div className="about-me">
               <div
                  className="about-image"
                  data-aos="fade-zoom-in"
                  data-aos-delay="100"
               >
                  <img
                     src="https://assets.website-files.com/61129bb2ecedf803564c68ec/6112b5031b9bac7e65bfa8d1_home-about-personal-x-template.jpg"
                     alt="about"
                  />
               </div>

               <div
                  className="about-content"
                  data-aos="fade-zoom-in"
                  data-aos-delay="300"
               >
                  <h2 className="h2-size">About me</h2>
                  <p className="paragraph">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Lectus mattis nunc aliquam tincidunt est non. Viverra nec
                     eu, in ridiculus egestas mi. Vulputate tristique porttitor
                     enim aliquam ullamcorper. Velit dui laoreet in et mus.
                  </p>
                  <div className="get-button">
                     <Button to="/about" title="More about me" />
                  </div>
               </div>
            </div>

            {/* Take-portfolio section */}
            <div className="take-portfolio">
               <div className="header" data-aos="fade-zoom-in">
                  <div className="header-content">
                     <h2 className="h2-size">
                        Take a look at my design portfolio
                     </h2>
                     <img
                        src="https://assets.website-files.com/61129bb2ecedf803564c68ec/6112bdfb2b341387dfa368b4_portfolio-underline-personal-x-template.svg"
                        alt="line"
                     />
                  </div>

                  <div className="arrows">
                     <button
                        onClick={() => {
                           sliderRef.current.slickPrev();
                        }}
                        className="arrow"
                     >
                        <MdOutlineArrowBackIos className="icon" />
                     </button>
                     <button
                        onClick={() => {
                           sliderRef.current.slickNext();
                        }}
                        className="arrow"
                     >
                        <MdOutlineArrowForwardIos className="icon" />
                     </button>
                  </div>
               </div>

               <div
                  className="portfolio-items"
                  data-aos="fade-zoom-in"
                  data-aos-offset="100"
               >
                  <Slider ref={sliderRef} {...settings}>
                     <PortfolioItem />
                     <PortfolioItem />
                     <PortfolioItem />
                     <PortfolioItem />
                     <PortfolioItem />
                  </Slider>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Home;
