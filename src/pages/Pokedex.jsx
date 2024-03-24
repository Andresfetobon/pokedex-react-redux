import { useSelector } from 'react-redux';
import useFetch from '../Hooks/useFetch';
import { useEffect } from 'react';
import imageHeader from '../../img/Pokemon.png';
import '../../Styles/Pokedex.css';

const Pokedex = () => {
  const trainerName = useSelector(state => state.trainerName);
  const baseUrl = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=20';
  const [pokemons, getAllPokemons] = useFetch(baseUrl);

  useEffect(() => {
    getAllPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(pokemons);

  return (
    <div>
      <div className='header-container'>
        <div className='red-section-header'></div>
        <div className='gray-section-header'></div>
        <img className='container-image-header' src={imageHeader} alt='' />
      </div>
      <p>
        Bienvenido <span>{trainerName},</span> aquí podrás encontrar tu pokemón
        favorito
      </p>
    </div>
  );
};

export default Pokedex;
