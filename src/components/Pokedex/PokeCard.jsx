/* eslint-disable react/prop-types */
import '../../../Styles/PokeCard.css';

import { useEffect } from 'react';
import useFetch from '../../Hooks/useFetch';
import { useNavigate } from 'react-router-dom';

const PokeCard = ({ url }) => {
  const [pokemon, getPokemonById] = useFetch(url);

  useEffect(() => {
    getPokemonById();
  }, []);

  const navigate = useNavigate();

  const handleGo = () => {
    navigate(`/pokedex/${pokemon.name}`);
  };

  return (

    <article
      className={`pokecard ${pokemon?.types[0].type.name}`}
      onClick={handleGo}
    >
      <header className={`pokecard-header bg-${pokemon?.types[0].type.name}`}>
        <img
          className='pokecard-image'
          src={pokemon?.sprites.other['official-artwork'].front_default}
          alt='imagen-pokemon'
        />
      </header>

      <section className='pokecard-body'>
        <h3 className='poke-name'>{pokemon?.name}</h3>
        <ul className='pokecard-types'>
          {pokemon?.types.map(typeInfo => (
            <li 
            className='pokecard_types-item'
            key={typeInfo.url}
            >{typeInfo.type.name}
            </li>
          ))}
        </ul>
      </section>

      <footer className='footer-card'>
        <ul className='pokecard-stats'>
          {pokemon?.stats.map(statInfo => (
            <li className='pokecard__stats-item' key={statInfo.url}>
              <span className='pokecard__stats-label' >{statInfo.stat.name}</span>
              <span className='pokecard__stats-value' >{statInfo.base_stat}</span>
            </li>
          ))}
        </ul>
      </footer>

    </article>
  );
};

export default PokeCard;
