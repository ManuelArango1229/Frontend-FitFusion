import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ConstruccionImg from '../../assets/Construccion.jpg';
import styles from './Estadisticas.module.scss';

const Estadisticas = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageBackground}></div>
      <Header/>
      <main className={styles.main}>
        <h1>ESTADISTICAS</h1>
        <div className={styles.imagenContruccion}>
          <img src={ConstruccionImg} alt="En construcción" /> 
        </div>

        {/* Agrega más contenido si lo deseas */}
      </main>
      <Footer/>
    </div>
  );
};

export default Estadisticas;
