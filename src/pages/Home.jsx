import { useRef } from 'react';
import imagen from '../../img/pokedex-3d-logo.png';
import { setTrainerNameG } from '../../store/slices/trainerName.slice';
import '../../Styles/HomeStyles.css';
import { useDispatch } from 'react-redux';
import imagePokemon from '../../img/Pokemon.png';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const inputNameRef = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(setTrainerNameG(inputNameRef.current.value.trim()));
    navigate('/pokedex');
  };

  return (
    <div className='container-home'>
      <img className='container-img' src={imagen} alt='Logo' />
      <h2 className='welcome-text'>!Hola entrenador¡</h2>
      <p className='container-parraf'>Para poder comenzar dame tu Nombre</p>
      <form className='pokedex-form' onSubmit={handleSubmit}>
        <input
          placeholder='Tu Nombre'
          type='text'
          ref={inputNameRef}
          required
        ></input>
        <button>Comenzar</button>
      </form>
      <footer className='pokedex-footer'>
        <div className='red-section'></div>
        <div className='black-section'></div>
        <div className='image-container'>
          <img src={imagePokemon} alt='Imagen pokemon' />
        </div>
      </footer>
    </div>
  );
};

export default Home;
