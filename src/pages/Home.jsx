import { useRef } from 'react';
import imagen from '../../img/pokedex-3d-logo.png';
import { setTrainerNameG } from '../../store/slices/trainerName.slice';
import '../../Styles/HomeStyles.css';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
  const inputNameRef = useRef();
  // const { trainerName } = useSelector(states => states); 
  const trainerName = useSelector(state => state.trainerName);

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(setTrainerNameG(inputNameRef.current.value.trim()));
    inputNameRef.current.value = '';
  };

  console.log(trainerName);

  return (
    <div className='container-home'>
      <img style={{ maxWidth: '50%' }} src={imagen} alt='Logo' />
      <h2 className='welcome-text'>!Hola entrenador¡</h2>
      <p style={{ fontSize: '1.5rem' }}>Para poder comenzar dame tu Nombre</p>
      <form className='pokedex-form' onSubmit={handleSubmit}>
        <input
          placeholder='Tu Nombre'
          type='text'
          ref={inputNameRef}
          required
        ></input>
        <button>Comenzar</button>
      </form>
    </div>
  );
};

export default Home;
