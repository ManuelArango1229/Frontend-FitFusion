import React from "react";
import Slider from "react-slick";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
import CorazonImg from '../../assets/Corazon.png';
import MusculoImg from '../../assets/Musculo.png';
import EnergiaImg from '../../assets/Energia.png';
import Ibai1Img from '../../assets/IbaiGordo.jpg';
import Ibai2Img from '../../assets/IbaiFlaco.jpg';
import Thor2Img from '../../assets/ThorFlaco.jpeg';
import Thor1Img from '../../assets/ThorGordo.jpg';
import Grefg1Img from '../../assets/GrefgGordo.jpg';
import Grefg2Img from '../../assets/GrefgFlaco.jpg';
import Button from '../../components/Button/Button';
import styles from './Home.module.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data1=[
  {
    image:Ibai1Img,
    title:'Ibai Llanos antes de FitFusion',
  },
  {
    image:Ibai2Img,
    title:'Ibai Llanos despues de FitFusion',
  }
]

const data2=[
  {
    image:Thor1Img,
    title:'chris Hemsworth antes de FitFusion',
  },
  {
    image:Thor2Img,
    title:'chris Hemsworth despues de FitFusion',
  }
]

const data3=[
  {
    image: Grefg1Img,
    title:'David Cánovas antes de FitFusion',
  },
  {
    image: Grefg2Img,
    title:'David Cánovas despues de FitFusion',
  }
]


const Home = () => {

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

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

        <div className={styles.ctaSecondary}>
          <h3>Aglunos de nuestros clientes satisfechos</h3>
          <div className={styles.topRow} >
            <div className={styles.testimonial1}>
              <Slider {...sliderSettings}>
                  {data1.map((item, index) => (
                    <div key={index}>
                      <img src={item.image} alt={item.title} />
                      <p>{item.title}</p>
                    </div>
                    ))}
              </Slider>
            </div>
            <div className={styles.testimonial}>
              <Slider {...sliderSettings}>
                  {data3.map((item, index) => (
                    <div key={index}>
                      <img src={item.image} alt={item.title} />
                      <p>{item.title}</p>
                    </div>
                    ))}
              </Slider>
            </div>
            <div className={styles.testimonial}>
              <Slider {...sliderSettings}>
                  {data2.map((item, index) => (
                    <div key={index}>
                      <img src={item.image} alt={item.title} />
                      <p>{item.title}</p>
                    </div>
                    ))}
              </Slider>
            </div>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
