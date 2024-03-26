import { useSelector } from 'react-redux';
import useFetch from '../Hooks/useFetch';
import { useEffect, useRef } from 'react';
import imageHeader from '../../img/Pokemon.png';
import PokeContainer from '../components/Pokedex/PokeContainers';
import '../../Styles/Pokedex.css';

const Pokedex = () => {
  const trainerName = useSelector(state => state.trainerName);
  const baseUrl = 'https://pokeapi.co/api/v2/pokemon?limit=20';
  const [pokemons, getAllPokemons] = useFetch(baseUrl);

  useEffect(() => {
    getAllPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const inputPokeRef = useRef();

  return (
    <div>
      <div className='header-container'>
        <div className='red-section-header'></div>
        <div className='gray-section-header'></div>
        <img className='container-image-header' src={imageHeader} alt='' />
      </div>
      <p className='welcome-user'>
        Bienvenido <span>{trainerName},</span> aquí podrás encontrar tu pokemón
        favorito
      </p>
      <div className='container-form-search'>
        <form className='pokedex-form'>
          <input
            type='text'
            placeholder='Busca un Pokemon'
            ref={inputPokeRef}
          />
          <button>Buscar</button>
        </form>
      </div>
      <PokeContainer pokemons={pokemons?.results} />
    </div>
  );
};

export default Pokedex;
