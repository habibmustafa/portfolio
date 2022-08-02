import { BrowserRouter } from 'react-router-dom';
import Header from "./components/Header"
import './App.scss';
import RoutesPage from './config/ReactRoutes';

function App() {
   return (
      <BrowserRouter>
         <>
            <Header />
            <RoutesPage />
         </>
      </BrowserRouter>
   );
}

export default App;