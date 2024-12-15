import { Link } from 'react-router-dom';
import Header from '../../../../components/Header/Header';
import Footer from '../../../../components/Footer/Footer';
import BancoInclinado from '../../../../assets/exercises/day3/BancoInclinado.gif';
import PechoPolea from '../../../../assets/exercises/day3/PechoPolea.gif';
import PeckDeck from '../../../../assets/exercises/day3/PeckDeck.gif';
import CurlCable from '../../../../assets/exercises/day3/CurlCable.gif';
import BraquialCuerda from '../../../../assets/exercises/day3/BraquialCuerda.gif';
import AbdomenBicicleta from '../../../../assets/exercises/day3/AbdomenBicicleta.gif';  
import styles from '../Day.module.scss';
import Button from '../../../../components/Button/Button';

const dayOneExercises = [
    {
      name: 'Banco Inclinado',
      details: `
        <strong>Músculos Implicados:</strong> Pectorales (Principalmente la porción superior), Deltoides Anteriores, Tríceps.<br>
        <strong>Ejecución:</strong> Acostado en el banco inclinado, agarra una barra o mancuernas con las manos un poco más anchas que los hombros. Baja el peso controladamente hasta el nivel del pecho, luego empuja hacia arriba extendiendo los brazos.<br>
        <strong>Descanso:</strong> 60-90 segundos.<br>
        <strong>Consejos:</strong> Mantén los pies firmes en el suelo y evita arquear excesivamente la espalda.`,
      reps: ' 3 series de 10-12 repeticiones.',
      gif: BancoInclinado,
    },
    {
        name: 'Pecho en Poleas con Manoplas (Crossover)',
        details: `
          <strong>Músculos Implicados:</strong> Pectorales (Mayor y Menor), Deltoides Anteriores, Tríceps.<br>
          <strong>Ejecución:</strong> De pie, ajusta las poleas a la altura superior. Sostén las manoplas con las palmas hacia adelante. Lleva las manos hacia el frente de tu pecho, cruzándolas ligeramente al final del movimiento, y regresa controladamente.<br>
          <strong>Descanso:</strong> 60-90 segundos<br>
          <strong>Consejos:</strong> Mantén una ligera flexión en los codos durante todo el ejercicio y evita usar impulso`,
        reps: '3 series de 10-12 repeticiones.',
        gif: PechoPolea,
    },
    {
        name: 'Peck Deck (Brazos Abiertos)',
        details: `
          <strong>Músculos Implicados:</strong> Pectorales (Principalmente la porción media), Deltoides Anteriores.<br>
          <strong>Ejecución:</strong> Siéntate en la máquina, ajusta el respaldo y las almohadillas a la altura de tus brazos. Con los codos ligeramente flexionados, lleva los brazos hacia el centro del pecho, apretando los pectorales al final del movimiento. Regresa controladamente.<br>
          <strong>Descanso:</strong> 60-90 segundos.<br>
          <strong>Consejos:</strong> Mantén la espalda bien apoyada y evita forzar el movimiento hacia adelante con los codos.`,
        reps: ' 3 series de 10-12 repeticiones.',
        gif: PeckDeck,
    },
    {
        name: 'Curl de Bíceps en Cable',
        details: `
          <strong>Músculos Implicados:</strong> Bíceps (Braquial y Braquiorradial).<br>
          <strong>Ejecución:</strong> De pie frente a la polea baja, agarra la cuerda o barra con las palmas hacia arriba. Flexiona los codos, llevando las manos hacia los hombros. Regresa controladamente.
<br>
          <strong>Descanso:</strong> 45-60 segundos.<br>
          <strong>Consejos:</strong> Mantén los codos fijos y evita usar impulso para jalar el peso.`,
        reps: ' 3 series de 12-15 repeticiones.',
        gif: CurlCable,
    },
    {
        name: 'Curl de Braquial en Polea con Cuerda',
        details: `
          <strong>Músculos Implicados:</strong>  Braquial, Bíceps, Braquiorradial.<br>
          <strong>Ejecución:</strong> De pie frente a la polea baja, sujeta la cuerda con las palmas hacia adentro (agarre neutro). Flexiona los codos, llevando las manos hacia los hombros, separando ligeramente los codos hacia los costados. Regresa controladamente.
<br>
          <strong>Descanso:</strong> 45-60 segundos.<br>
          <strong>Consejos:</strong>  Mantén los codos pegados al torso y controla el movimiento, evitando el uso de impulso.`,
        reps: ' 3 series de 12-15 repeticiones.',
        gif: BraquialCuerda,
    },
    {
        name: 'Abdominales en Bicicleta',
        details: `
          <strong>Músculos Implicados:</strong>  Recto Abdominal, Oblicuos (Internos y Externos).<br>
          <strong>Ejecución:</strong> Acostado en el suelo, lleva las manos detrás de la cabeza. Lleva una rodilla hacia el pecho mientras giras el torso para que el codo opuesto se acerque a esa rodilla, alternando lados como si estuvieras pedaleando una bicicleta.
<br>
          <strong>Descanso:</strong> 30-45 segundos.<br>
          <strong>Consejos:</strong> Evita jalar el cuello con las manos y mantén un ritmo controlado.`,
        reps: ' 3 series de 15-20 repeticiones por lado.',
        gif: AbdomenBicicleta,
    }
  ];
  
const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
};

const dayOne = () => {
  const shuffledExercises = shuffleArray([...dayOneExercises]);
  return (
    <div className={styles.container}>
        <div className={styles.imageBackground3}></div>
            <Header />
            <main className={styles.main}>
            <h1>Dia 3: Pecho</h1>
            <div className={styles.exercises}>

            {shuffledExercises.map((exercise, index) => (
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
