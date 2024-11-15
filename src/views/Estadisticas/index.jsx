import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './Estadisticas.module.scss';

const Estadisticas = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageBackground}></div>
      <Header/>
      <main className={styles.main}>
        <h1>PAGINA DE ESTADISTICAS</h1>
        <p> Aquí podrás encontrar rutinas de ejercicio personalizadas, estadísticas de tu progreso y mucho más.</p>

        {/* Agrega más contenido si lo deseas */}
      </main>
      <Footer/>
    </div>
  );
};

export default Estadisticas;
