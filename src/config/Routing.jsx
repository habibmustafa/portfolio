import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";
import NotFound from "../pages/NotFound";
import PortfolioProject from "../pages/PortfolioProject";
import Protected from "../pages/Protected";

const Routing = () => {
   const routes = useRoutes([
      {
         path: "/",
         element: <Home />,
      },
      {
         path: "/about",
         element: <About />,
      },
      {
         path: "/contact",
         element: <Contact />,
      },
      {
         path: "/portfolio",
         element: <Portfolio />,
      },
      {
         path: "/portfolio-project/:name",
         element: <PortfolioProject />,
      },
      {
         path: "/401",
         element: <Protected />,
      },
      {
         path: "/*",
         element: <NotFound />,
      },
   ])

   return routes;
};

export default Routing;
