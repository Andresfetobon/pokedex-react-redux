import { useNavigate, useParams } from 'react-router-dom';
import imageHeader from '../../img/Pokemon.png';
import useFetch from '../Hooks/useFetch';
import { useEffect } from 'react';

const PokedexName = () => {
  const navigate = useNavigate();
  const { name } = useParams();

  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const [pokemonInfo, getPokemonByName] = useFetch(url);

  useEffect(() => {
    getPokemonByName();
  }, [name]);

  console.log(pokemonInfo);

  const handleGoBack = () => {
    navigate('/pokedex');
  };

  return (
    <div>
      <div className='header-container'>
        <div className='red-section-header'></div>
        <div className='gray-section-header'></div>
        <img className='container-image-header' src={imageHeader} alt='' />
      </div>
      <button onClick={handleGoBack}>Regresar a pokemon card</button>
      <h1>{name}</h1>
      <img
        className='poke-image'
        src={pokemonInfo?.sprites.other['official-artwork'].front_default}
        alt='imagen-pokemon'
      />
      <h3 className='poke-name'>#{pokemonInfo?.id}</h3>
      <h3 className='poke-name'>{pokemonInfo?.name}</h3>
    </div>
  );
};

export default PokedexName;
