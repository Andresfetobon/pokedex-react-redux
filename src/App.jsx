import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Pokedex from './pages/Pokedex';
import './App.css';
import ProtectedRoutes from './pages/ProtectedRoutes';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/pokedex' element={<Pokedex />} />
        </Route>
      </Routes>
      <footer className='pokedex-footer'>
        <div className='red-section'></div>
        <div className='black-section'></div>
      </footer>
    </div>
  );
}

export default App;
