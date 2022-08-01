import { BrowserRouter } from 'react-router-dom';
import Navbar from "./components/Navbar"
import './App.scss';
import RoutesPage from './config/ReactRoutes';

function App() {
   return (
      <BrowserRouter>
         <>
            <Navbar />
            <RoutesPage />
         </>
      </BrowserRouter>
   );
}

export default App;