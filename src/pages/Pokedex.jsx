import { useSelector } from 'react-redux';
import useFetch from '../Hooks/useFetch';
import { useEffect, useRef, useState } from 'react';
import imageHeader from '../../img/Pokemon.png';
import PokeContainer from '../components/Pokedex/PokeContainers';
import '../../Styles/Pokedex.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Pokedex = () => {
  const [optionValue, setOptionValue] = useState('all-pokemons');

  const trainerName = useSelector(state => state.trainerName);

  let url = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0';
  const [pokemons, getAllPokemons, hassError, setInfoApi] = useFetch(url);
  const urlTypes = 'https://pokeapi.co/api/v2/type';
  const [types, getAllTypes] = useFetch(urlTypes);

  useEffect(() => {
    if (optionValue === 'all-pokemons') {
      getAllPokemons();
    } else {
      axios
        .get(optionValue)
        .then(res => {
          const data = {
            results: res.data.pokemon.map(pokeInfo => pokeInfo.pokemon),
          };
          setInfoApi(data);
        })
        .catch(err => console.log(err));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [optionValue]);

  useEffect(() => {
    getAllTypes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const searchPokemon = useRef();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const inputValue = searchPokemon.current.value.trim().toLowerCase();
    navigate(`/pokedex/${inputValue}`);
  };

  const handleChangeType = e => {
    setOptionValue(e.target.value);
  };

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
        <form className='pokedex-form' onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Busca un Pokemon'
            ref={searchPokemon}
          />
          <button>Buscar</button>
          <select onChange={handleChangeType} className='custom-select'>
            <option value='all-pokemons'>Todos los Pokemones</option>
            {types?.results.map(typeInfo => (
              <option
                className='custom-option'
                key={typeInfo.url}
                value={typeInfo.url} 
              >
                {typeInfo.name}
              </option>
            ))}
          </select>
        </form>
      </div>
      <PokeContainer pokemons={pokemons?.results} />
    </div>
  );
};

export default Pokedex;
