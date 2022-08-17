import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";
import NotFound from "../pages/NotFound";
import PortfolioProject from "../pages/PortfolioProject";
import Protected from "../pages/Protected";

const ReactRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/portfolio" element={<Portfolio />} />
         <Route path="/portfolio-project/:name" element={<PortfolioProject />} />
         <Route path="/401" element={<Protected />} />
         <Route path="*" element={<NotFound />} />
         {/* Route */}
      </Routes>
   );
};

export default ReactRoutes;
