import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './AboutUs.module.scss';

const AboutUs = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imageBackground}></div>
      <Header />
      <main className={styles.main}>
        <h1>Quiénes Somos</h1>
        <section className={styles.content}>
          <p>
            En Fitfusion, nuestra misión es revolucionar la forma en que las personas se relacionan con la actividad física y la salud. 
            Creemos en el poder de la tecnología para inspirar hábitos saludables y transformar vidas.
          </p>
          <h2>Nuestro equipo</h2>
          <p>
            Contamos con un equipo multidisciplinario de desarrolladores, entrenadores y diseñadores apasionados por mejorar tu experiencia fitness.
          </p>
          <h2>Visión</h2>
          <p>
          El objetivo de Fitfusion es ofrecer una plataforma intuitiva que permita a los usuarios
mejorar su rendimiento fisico mediante rutinas de ejercicio personalizadas, con el respaldo
de entrenadores y la posibilidad de seguir su progreso de manera continua.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
