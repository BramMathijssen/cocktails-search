import "./App.css";
import { Route, Routes, Navigate, Link } from 'react-router-dom';
import CocktailsPage from './pages/CocktailsPage';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Navigate replace to='/cocktails' />} />
      <Route path='/cocktails' element={<CocktailsPage/>} />
    </Routes>

  );
}

export default App;
