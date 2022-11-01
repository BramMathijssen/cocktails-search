import "./App.css";
import { Route, Routes, Navigate, Link } from 'react-router-dom';
import CocktailsPage from './pages/CocktailsPage';
import CocktailDetailsPage from './pages/CocktailDetailsPage';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Navigate replace to='/cocktails' />} />
      <Route path='/cocktails' element={<CocktailsPage/>} />
      <Route path='/cocktails/:cocktailId' element={<CocktailDetailsPage />} />
    </Routes>

  );
}

export default App;
