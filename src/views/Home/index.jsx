import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
import CorazonImg from '../../assets/Corazon.png';
import MusculoImg from '../../assets/Musculo.png';
import EnergiaImg from '../../assets/Energia.png';
import IbaiImg from '../../assets/IbaiFlaco.jpg';
import BayernImg from '../../assets/Bayern.jpg';
import Button from '../../components/Button/Button';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageBackground}></div>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>¡Tu mejor versión empieza hoy!</h1>
          <p>Transforma tu cuerpo, transforma tu mente</p>
          <Link to="/routines">
            <Button className={styles.button}>Comienza ahora</Button>
          </Link>
        </section>

        <section className={styles.benefits}>
          <div className={styles.benefit}>
            <img src={CorazonImg} alt="Health" />
            <h3>Mejora tu salud</h3>
            <p>Reduce el estrés y mejora tu bienestar</p>
          </div>
          <div className={styles.benefit}>
            <img src={MusculoImg} alt="Strength" />
            <h3>Gana músculo y fuerza</h3>
            <p>Incrementa tu capacidad física</p>
          </div>
          <div className={styles.benefit}>
            <img src={EnergiaImg} alt="Energy" />
            <h3>Aumenta tu energía</h3>
            <p>Siéntete más activo y motivado</p>
          </div>
        </section>

        <section className={styles.testimonials}>
          <div className={styles.testimonial}>
            <img src={BayernImg} alt="User Testimonial 1" />
            <p>"¡FitFusion me ayudó a perder 10 kg en solo 3 meses, me siento increíble!"</p>
          </div>
          <div className={styles.testimonial}>
            <img src={IbaiImg} alt="User Testimonial 2" />
            <p>"Gracias a los entrenamientos personalizados, mis resultados han sido increíbles!"</p>
          </div>
        </section>

        <section className={styles.ctaSecondary}>
          <h3>¿Estás listo para empezar..?</h3>
          <Link to="/routines">
            <Button>Explorar Rutinas</Button>
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
