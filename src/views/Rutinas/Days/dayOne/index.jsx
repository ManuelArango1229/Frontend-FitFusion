import { Link } from 'react-router-dom';
import Header from '../../../../components/Header/Header';
import Footer from '../../../../components/Footer/Footer';
import Abductores from '../../../../assets/exercises/day1/Abductores.gif';
import Extension from '../../../../assets/exercises/day1/ExtensionCuadriceps.gif';
import LegCurl from '../../../../assets/exercises/day1/LegCurl.gif';
import sentadilla from '../../../../assets/exercises/day1/sentadilla.gif';
import Prensa from '../../../../assets/exercises/day1/Prensa.gif';
import PantorillaParado from '../../../../assets/exercises/day1/PantorillaParado.gif';  
import styles from '../Day.module.scss';
import Button from '../../../../components/Button/Button';

const dayOneExercises = [
    {
      name: 'Sentadilla',
      details: `
        <strong>Músculos Implicados:</strong> Cuádriceps, Glúteos, Isquiotibiales.<br>
        <strong>Ejecución:</strong> Con los pies a la altura de los hombros, flexiona las rodillas y baja, manteniendo la espalda recta.<br>
        <strong>Descanso:</strong> 60-90 segundos.<br>
        <strong>Consejos:</strong> No dejes que las rodillas sobrepasen los pies y mantén el core activo.
      `,
      reps: ' 3 series de 10-12 repeticiones.',
      gif: sentadilla,
    },
    {
        name: 'Extensión de Cuádriceps',
        details: `
          <strong>Músculos Implicados:</strong> Cuádriceps (Vasto Medial, Vasto Lateral, Vasto Intermedio, Recto Femoral).<br>
          <strong>Ejecución:</strong> Siéntate en la máquina, ajusta la altura y extiende las piernas hasta estar rectas. Regresa controladamente.<br>
          <strong>Descanso:</strong> 45-60 segundos.<br>
          <strong>Consejos:</strong> No hiperextiendas las rodillas y controla el movimiento.`,
        reps: '3 series de 12-15 repeticiones.',
        gif: Extension,
    },
    {
        name: 'Leg Curl (Curl de Pierna)',
        details: `
          <strong>Músculos Implicados:</strong> Isquiotibiales (Semitendinoso, Semimembranoso, Bíceps Femoral).<br>
          <strong>Ejecución:</strong> Acostado en la máquina, flexiona las piernas llevando los talones hacia los glúteos. Regresa controladamente.<br>
          <strong>Descanso:</strong> 45-60 segundos.<br>
          <strong>Consejos:</strong> No levantes las caderas y controla el peso.
        `,
        reps: ' 3 series de 12-15 repeticiones.',
        gif: LegCurl,
    },
    {
        name: 'Apertura de Piernas en Máquina de Abductores',
        details: `
          <strong>Músculos Implicados:</strong> Abductores de la cadera (Glúteo Medio, Glúteo Menor).<br>
          <strong>Ejecución:</strong>Siéntate en la máquina y separa las piernas, controlando el movimiento.<br>
          <strong>Descanso:</strong> 45-60 segundos.<br>
          <strong>Consejos:</strong> No uses impulso y mantén el core activo. `,
        reps: ' 3 series de 15-20 repeticiones.',
        gif: Abductores,
    },
    {
        name: 'Prensa (Leg Press)',
        details: `
          <strong>Músculos Implicados:</strong>  Cuádriceps, Glúteos, Isquiotibiales.<br>
          <strong>Ejecución:</strong> Siéntate, coloca los pies en la plataforma y empuja hacia arriba, extendiendo las piernas sin bloquear las rodillas.<br>
          <strong>Descanso:</strong> 60-90 segundos.<br>
          <strong>Consejos:</strong> Mantén la espalda apoyada y controla el descenso.`,
        reps: ' 3 series de 12-15 repeticiones.',
        gif: Prensa,
    },
    {
        name: 'Elevación de Pantorrillas en Máquina (De Pie)',
        details: `
          <strong>Músculos Implicados:</strong>  Gastrocnemio, Sóleo.<br>
          <strong>Ejecución:</strong> Coloca los pies en la plataforma, desciende los talones y elévalos al máximo..<br>
          <strong>Descanso:</strong> 30-45 segundos.<br>
          <strong>Consejos:</strong> Mantén las piernas ligeramente flexionadas y controla el movimiento.`,
        reps: ' 3 series de 15-20 repeticiones.',
        gif: PantorillaParado,
    }
  ];
  

const dayOne = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imageBackground}></div>
            <Header />
            <main className={styles.main}>
            <h1>Dia 1: Pierna</h1>
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
