// eslint-disable-next-line react/prop-types
/* eslint-disable react/prop-types */

import PokeCard from './PokeCard';
const PokeContainers = ({ pokemons }) => {
  return (
    <div className='container-poke'>
      {pokemons?.map(pokemon => (
        <PokeCard key={pokemon.url} url={pokemon.url} />
      ))}
    </div>
  );
};

export default PokeContainers;
