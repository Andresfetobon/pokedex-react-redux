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

  console.log(pokemon);

  return (
    <div className={`container-poke ${pokemon?.types[0].type.name}`} onClick={handleGo}>
      <div className='poke-card'>
        <img
          className='poke-image'
          src={pokemon?.sprites.other['official-artwork'].front_default}
          alt='imagen-pokemon'
        />
        <section className='section-card'>
          <h3 className='poke-name'>{pokemon?.name}</h3>
          <ul>
            {pokemon?.types.map(typeInfo => (
              <li key={typeInfo.url}>{typeInfo.type.name}</li>
            ))}
          </ul>
        </section>
        <footer className='footer-card'>
          <ul>
            {pokemon?.stats.map(statInfo => (
              <li key={statInfo.url}>
                <span>{statInfo.stat.name}</span>
                <span>{statInfo.base_stat}</span>
              </li>
            ))}
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default PokeCard;
