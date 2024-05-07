import { useNavigate, useParams } from 'react-router-dom';
import imageHeader from '../../img/Pokemon.png';
import useFetch from '../Hooks/useFetch';
import { useEffect } from 'react';
import MessageError from '../components/Pokedex/MessageError';
import '../../Styles/PokedexName.css';

const PokedexName = () => {
  const { name } = useParams();

  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const [pokemonInfo, getPokemonByName, hassError] = useFetch(url);

  useEffect(() => {
    getPokemonByName();
  }, [name]);

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate('/pokedex');
  };
  console.log(pokemonInfo);
  return (
    <div>
      {hassError ? (
        <MessageError />
      ) : (
        <>
          <div className='header-container'>
            <div className='red-section-header'></div>
            <div className='gray-section-header'></div>
            <img
              className='container-image-header'
              src={imageHeader}
              alt='Pokemon'
            />
          </div>

          <button className='button-back' onClick={handleGoBack}>
            Regresar a pokemon card
          </button>

          <header className='container-header'>
            <img
              className='pokecard-imagen'
              src={pokemonInfo?.sprites.other['official-artwork'].front_default}
              alt='imagen-pokemon'
            />
          </header>

          <section className='container-body'>
          <h3 className='poke-name'>#{pokemonInfo?.id}</h3>
          <h2 className='poke-name'>{pokemonInfo?.name}</h2>
          <h2 className='poke-weigth'>Weight {pokemonInfo?.weight}</h2>
          <h2 className='poke-heigh'>Heigh {pokemonInfo?.height}</h2>
          <p>Tipo</p>
          <h2 className='poke-type'>{pokemonInfo?.types[0].type.name}</h2>
          <h2 className='poke-type-two'>{pokemonInfo?.types[1].type.name}</h2>
          <p>Habilidades</p>
          <h2 className='poke-abilities'>{pokemonInfo?.abilities[0].ability.name}</h2>
          <h2 className='poke-abilities-two'>{pokemonInfo?.abilities[1].ability.name}</h2>
          </section>

          <section className='container-stats'>
            <h2>Stats</h2>
          <h2 className='poke'>{pokemonInfo?.stats[0].stat.name}</h2>
          <h2 className='poke'>{pokemonInfo?.stats[0].base_stat}</h2>
          <h2 className='poke'>{pokemonInfo?.stats[1].stat.name}</h2>
          <h2 className='poke'>{pokemonInfo?.stats[1].base_stat}</h2>
          <h2 className='poke'>{pokemonInfo?.stats[2].stat.name}</h2>
          <h2 className='poke'>{pokemonInfo?.stats[2].base_stat}</h2>
          <h2 className='poke'>{pokemonInfo?.stats[5].stat.name}</h2>
          <h2 className='poke'>{pokemonInfo?.stats[5].base_stat}</h2>
          </section>

          <footer className='container-movements'>
            <h2>Movimientos</h2>
           <ul>
            {
              pokemonInfo?.moves.map((pokeInfo) => (
                <li className='poke-movements' key={pokeInfo.id}>
                  <p>{pokeInfo.move.name}</p>
                </li>
              ))
            }
           </ul>
          </footer>

        </>
      )}
    </div>
  );
};

export default PokedexName;
