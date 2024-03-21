import imagen from '../../img/pokedex-3d-logo.png';
import  '../../Styles/HomeStyles.css'

const Home = () => {
  return (
    <div className='container-home'>
      <img style={{ maxWidth: "50%" }} src={imagen} alt='Logo' />
      <h2 className="welcome-text">!Hola entrenador¡</h2>
      <p style={{fontSize: "1.5rem"}}>Para poder comenzar dame tu Nombre</p>
      <form className='pokedex-form'>
        <input placeholder='Tu Nombre' type='text' />
        <button>Comenzar</button>
      </form>
    </div>
  );
};

export default Home;
