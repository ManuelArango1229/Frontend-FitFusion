import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.container}>
      <Header className={styles.header} />
      <main className={styles.main}>
        {/* Contenido principal del Home */}
        <h1>Bienvenido a Fitfusion</h1>
        {/* Puedes agregar más contenido aquí */}
      </main>
      <Footer className={styles.footer} />
    </div>
  );
};

export default Home;
