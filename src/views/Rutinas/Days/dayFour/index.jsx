import { Link } from 'react-router-dom';
import Header from '../../../../components/Header/Header';
import Footer from '../../../../components/Footer/Footer';
import CrunchAbdominales from '../../../../assets/exercises/day4/CrunchAbdominales.gif';
import ExtensionGemelos from '../../../../assets/exercises/day4/ExtensionGemelos.gif';
import HipThrust from '../../../../assets/exercises/day4/HipThrust.gif';
import PoleaAlta from '../../../../assets/exercises/day4/PoleaAlta.gif';
import PressFrances from '../../../../assets/exercises/day4/PressFrances.gif';
import VuelosLaterales from '../../../../assets/exercises/day4/VuelosLaterales.gif';  
import styles from '../Day.module.scss';
import Button from '../../../../components/Button/Button';

const dayOneExercises = [
    {
      name: 'Crunch Inferior con Flexión y Extensión',
      details: `
        <strong>Músculos Implicados:</strong> Recto Abdominal, Oblicuos.<br>
        <strong>Ejecución:</strong> Acostado en el suelo o en una máquina de crunch, coloca las manos a los lados de la cabeza o sobre el abdomen. Flexiona las caderas y lleva las rodillas hacia el pecho, luego extiende las piernas sin tocar el suelo. Realiza el movimiento controlado, manteniendo la espalda baja pegada al suelo.<br>
        <strong>Descanso:</strong> 60-90 segundos.<br>
        <strong>Consejos:</strong> Evita usar impulso; concéntrate en la contracción abdominal durante todo el movimiento. `,
      reps: ' 3 series de 15-20 repeticiones.',
      gif: CrunchAbdominales,
    },
    {
        name: 'Extensión de Gemelos Sentado en Máquina',
        details: `
          <strong>Músculos Implicados:</strong> Sóleo, Gastrocnemio (porción inferior).<br>
          <strong>Ejecución:</strong> Siéntate en la máquina con los pies apoyados en la plataforma y las rodillas ligeramente flexionadas. Coloca las almohadillas sobre los muslos y empuja los talones hacia abajo, extendiendo los tobillos. Luego, regresa controladamente a la posición inicial.<br>
          <strong>Descanso:</strong> 45-60 segundos.<br>
          <strong>Consejos:</strong> Mantén las piernas fijas y concéntrate en la extensión de los tobillos, controlando el movimiento en ambas fases.`,
        reps: '3 series de 15-20 repeticiones.',
        gif: ExtensionGemelos,
    },
    {
        name: 'Hip Thrust',
        details: `
          <strong>Músculos Implicados:</strong> Glúteos, Isquiotibiales, Cuádriceps.<br>
          <strong>Ejecución:</strong> Sentado en el suelo con la espalda apoyada en un banco, coloca una barra sobre las caderas. Con los pies firmemente plantados en el suelo y las rodillas flexionadas, empuja las caderas hacia arriba hasta que el cuerpo forme una línea recta desde las rodillas hasta los hombros. Baja controladamente.<br>
          <strong>Descanso:</strong> 60-90 segundos.<br>
          <strong>Consejos:</strong> Evita arquear la espalda baja, concéntrate en apretar los glúteos al subir y controla el movimiento.  `,
        reps: ' 3 series de 12-15 repeticiones.',
        gif: HipThrust,
    },
    {
        name: 'Extensión de Tríceps con Polea Alta',
        details: `
          <strong>Músculos Implicados:</strong> Tríceps (Largo, Lateral y Corto).<br>
          <strong>Ejecución:</strong> De pie frente a la polea alta, agarra la cuerda o barra con las palmas hacia abajo. Tira de la cuerda hacia abajo, extendiendo completamente los codos. Regresa controladamente a la posición inicial sin que los codos se muevan hacia adelante.
<br>
          <strong>Descanso:</strong> 60 segundos.<br>
          <strong>Consejos:</strong> Mantén los codos fijos a los lados del torso y evita usar impulso para el movimiento.`,
        reps: ' 3 series de 15-20 repeticiones.',
        gif: PoleaAlta,
    },
    {
        name: 'Press Francés con Barra',
        details: `
          <strong>Músculos Implicados:</strong>  Tríceps (Largo, Lateral y Corto).<br>
          <strong>Ejecución:</strong>Acostado en un banco plano, agarra la barra con un agarre estrecho. Baja la barra controladamente hacia la frente flexionando los codos, luego extiende los codos para regresar a la posición inicial. <br>
          <strong>Descanso:</strong> 60-90 segundos.<br>
          <strong>Consejos:</strong>Mantén los codos fijos y evita que se abran hacia los lados. Controla el movimiento en ambas direcciones.`,
        reps: ' 3 series de 12-15 repeticiones.',
        gif: PressFrances,
    },
    {
        name: 'Vuelos Laterales',
        details: `
          <strong>Músculos Implicados:</strong>  Deltoides (Principalmente la porción medial).<br>
          <strong>Ejecución:</strong> De pie, con una mancuerna en cada mano, mantén los codos ligeramente flexionados. Eleva los brazos hacia los lados hasta que estén a la altura de los hombros, luego regresa controladamente.<br>
          <strong>Descanso:</strong> 30-45 segundos.<br>
          <strong>Consejos:</strong> No uses impulso; controla el movimiento en todo momento y mantén los hombros relajados.
`,
        reps: ' 3 series de 15-20 repeticiones.',
        gif: VuelosLaterales,
    }
  ];
  

const dayOne = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imageBackground4}></div>
            <Header />
            <main className={styles.main}>
            <h1>Dia 4: Cuerpo Entero</h1>
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
