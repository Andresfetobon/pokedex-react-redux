import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Pokedex from './pages/Pokedex';
import './App.css';
import ProtectedRoutes from './pages/ProtectedRoutes';
import PokedexName from './pages/PokedexName';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/pokedex' element={<Pokedex />} />
          <Route path='/pokedex/:name' element={<PokedexName />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
