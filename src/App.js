import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AOS from 'aos'
import "aos/dist/aos.css";
import Header from "./components/Header"
import './App.scss';
import RoutesPage from './config/ReactRoutes';
import Footer from './components/Footer';

function App() {

   // AOS animation
   useEffect(() => {
      AOS.init({
         useClassNames: true,
         easing: 'ease-in-back',
         delay: 0,
         offset: 250,
         once: true,
         mirror: true,
      });

      AOS.refresh();
   }, []);

   
   return (
      <BrowserRouter>
         <>
            <Header />
            <RoutesPage />
            <Footer />
         </>
      </BrowserRouter>
   );
}

export default App;