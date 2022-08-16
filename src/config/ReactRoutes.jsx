import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";
import NotFound from "../pages/NotFound";

const ReactRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/portfolio" element={<Portfolio />} />
         <Route path="*" element={<NotFound />} />
         {/* Route */}
      </Routes>
   );
};

export default ReactRoutes;
