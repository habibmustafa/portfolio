import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header";
import "./App.scss";
import Footer from "./components/Footer";
import ScrollToTop from "./config/ScrollToTop";
import Routing from "./config/Routing";

function App() {
   // AOS animation
   useEffect(() => {
      AOS.init({
         useClassNames: true,
         easing: "ease-in-back",
         delay: 0,
         offset: 250,
         once: true,
         mirror: true,
         duration: 500,
      });

      AOS.refresh();
   }, []);

   return (
      <BrowserRouter>
         <>
            <ScrollToTop />
            <Header />
            <Routing />
            <Footer />
         </>
      </BrowserRouter>
   );
}

export default App;
