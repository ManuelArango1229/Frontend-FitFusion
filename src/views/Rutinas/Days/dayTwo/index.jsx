import { Link } from 'react-router-dom';
import Header from '../../../../components/Header/Header';
import Footer from '../../../../components/Footer/Footer';
import RemoPoleaBaja from '../../../../assets/exercises/day2/RemoPoleaBaja.gif';
import JalonPecho from '../../../../assets/exercises/day2/JalonPecho.gif';
import RemoBarra from '../../../../assets/exercises/day2/RemoBarra.gif';
import ExtensionLumbar from '../../../../assets/exercises/day2/ExtensionLumbar.gif';
import Encogimiento from '../../../../assets/exercises/day2/Encogimiento.gif';
import FacePull from '../../../../assets/exercises/day2/FacePull.gif';  
import styles from '../Day.module.scss';
import Button from '../../../../components/Button/Button';

const dayOneExercises = [
    {
      name: 'Remo Polea Baja',
      details: `
        <strong>Músculos Implicados:</strong> Dorsales, Romboides, Trapecios.<br>
        <strong>Ejecución:</strong> Siéntate con la espalda recta, tira de la barra hacia tu abdomen, concentrándote en los músculos de la espalda.<br>
        <strong>Descanso:</strong> 60-90 segundos.<br>
        <strong>Consejos:</strong> Evita usar impulso y mantén los hombros relajados.`,
      reps: ' 3 series de 10-12 repeticiones.',
      gif: RemoPoleaBaja,
    },
    {
        name: 'Jalón Vertical con Polea (Jalón al Pecho)',
        details: `
          <strong>Músculos Implicados:</strong> Dorsales, Bíceps, Trapecio, Romboides.<br>
          <strong>Ejecución:</strong> Siéntate, agarra la barra con las manos más anchas que los hombros. Tira de la barra hacia el pecho, llevando los codos hacia abajo y hacia atrás. Regresa controladamente.<br>
          <strong>Descanso:</strong> 60-90 segundos<br>
          <strong>Consejos:</strong> Evita usar impulso, mantén los hombros relajados y hacia abajo, y no dejes que la barra suba más allá de los hombros.`,
        reps: '3 series de 10-12 repeticiones.',
        gif: JalonPecho,
    },
    {
        name: 'Remo con Barra',
        details: `
          <strong>Músculos Implicados:</strong> Dorsales, Romboides, Trapecio, Bíceps.<br>
          <strong>Ejecución:</strong> De pie, con las rodillas ligeramente flexionadas, inclina el torso hacia adelante manteniendo la espalda recta. Tira de la barra hacia el abdomen, concentrándote en apretar los omóplatos. Regresa controladamente.<br>
          <strong>Descanso:</strong> 60-90 segundos.<br>
          <strong>Consejos:</strong> Mantén la espalda recta durante todo el movimiento y evita que los codos se abran demasiado.`,
        reps: ' 3 series de 10-12 repeticiones.',
        gif: RemoBarra,
    },
    {
        name: 'Extensión Lumbar',
        details: `
          <strong>Músculos Implicados:</strong> Erectores espinales, Glúteos, Isquiotibiales.<br>
          <strong>Ejecución:</strong> Siéntate en la máquina de extensión lumbar, ajusta las almohadillas a la altura de tus caderas. Flexiona ligeramente las rodillas y baja el torso hacia adelante, luego regresa a la posición inicial contrayendo la espalda baja.<br>
          <strong>Descanso:</strong> 45-60 segundos.<br>
          <strong>Consejos:</strong> No hiperextiendas la espalda y controla el movimiento al regresar.`,
        reps: ' 3 series de 12-15 repeticiones.',
        gif: ExtensionLumbar,
    },
    {
        name: 'Encogimiento de Hombros',
        details: `
          <strong>Músculos Implicados:</strong>  Trapecio (Parte Superior).<br>
          <strong>Ejecución:</strong> De pie, con una barra o mancuernas en las manos, mantén los brazos extendidos a los lados. Eleva los hombros hacia las orejas sin mover los brazos, luego baja controladamente.<br>
          <strong>Descanso:</strong> 45-60 segundos.<br>
          <strong>Consejos:</strong> Mantén la espalda recta y evita usar impulso; concéntrate en contraer los trapecios al elevar los hombros.`,
        reps: ' 3 series de 12-15 repeticiones.',
        gif: Encogimiento,
    },
    {
        name: 'Face Pull',
        details: `
          <strong>Músculos Implicados:</strong>  Gastrocnemio, Sóleo.<br>
          <strong>Ejecución:</strong> Coloca los pies en la plataforma, desciende los talones y elévalos al máximo..<br>
          <strong>Descanso:</strong> 30-45 segundos.<br>
          <strong>Consejos:</strong> Mantén las piernas ligeramente flexionadas y controla el movimiento.`,
        reps: ' 3 series de 15-20 repeticiones.',
        gif: FacePull,
    }
  ];
  

const dayOne = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imageBackground2}></div>
            <Header />
            <main className={styles.main}>
            <h1>Dia 2: Espalda</h1>
            <div className={styles.exercises}>

            {dayOneExercises.map((exercise, index) => (
                <div key={index} className={styles.exerciseBlock}>
                <div className={styles.gifContainer}>
                <img src={exercise.gif} alt={exercise.name} />
                </div>
                <div className={styles.details}>
                <h2 className={styles.exerciseTitle}>{exercise.name}</h2>
                <p className={styles.reps}><strong>{exercise.reps}</strong></p>
                <div className={styles.textContent}>
                 <p>{exercise.description}</p>
                <div
                  dangerouslySetInnerHTML={{ __html: exercise.details }}
                 className={styles.additionalDetails}
                />
                </div>
             </div>
        </div>
        ))}

      </div>

      <div className={styles.buttonContainer}>
          <Link to="/routines">
            <Button>Regresar</Button>
          </Link>
      </div>
        
            </main>
            <Footer />
    </div>
  );
};

export default dayOne;
