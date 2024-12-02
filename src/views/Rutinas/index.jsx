import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ConstruccionImg from "../../assets/Construccion.jpg";
import dia1img from "../../assets/exercises/PiernaFondo.jpg";
import dia2img from "../../assets/exercises/EspaldaFondo.jpg";
import dia3img from "../../assets/exercises/PechoFondo.jpg";
import dia4img from "../../assets/exercises/FullbodyFondo.jpg";
import styles from "./Rutinas.module.scss";

const Rutinas = () => {
  const days = [
    { day: "Día 1", muscle: "Pierna", image: dia1img, link: "/dayOne" },
    { day: "Día 2", muscle: "Espalda", image: dia2img, link: "/dayTwo" },
    { day: "Día 3", muscle: "Pecho", image: dia3img, link: "/dayThree" },
    { day: "Día 4", muscle: "Full Body", image: dia4img, link: "/dayFour" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.imageBackground}></div>
      <Header />
      <main className={styles.main}>
        <h1>RUTINAS</h1>
        <div className={styles.grid}>
          {days.map(({ day, muscle, image, link }) => (
            <Link
              to={link}
              key={day}
              className={styles.card}
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className={styles.overlay}>
                <h2>{day}</h2>
                <p>{muscle}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Rutinas;
