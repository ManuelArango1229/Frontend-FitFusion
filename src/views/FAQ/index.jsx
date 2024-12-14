import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./faq.module.scss";

const FAQ = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageBackground}></div>
      <Header />
      <main className={styles.main}>
        <h1>Preguntas Frecuentes</h1>
        <section className={styles.content}>
          <div className={styles.question}>
            <h2>¿Puedo cambiar mi rutina?</h2>
            <p>
              No. La edición de rutinas está reservada exclusivamente para el
              usuario con perfil de entrenador, quien personalizará las rutinas
              según tus necesidades y objetivos.
            </p>
          </div>
          <div className={styles.question}>
            <h2>
              ¿Puedo usar la aplicación si tengo alguna discapacidad física?
            </h2>
            <p>
              Sí. Al momento de crear tu perfil, puedes especificar tu
              discapacidad. Con esta información, se diseñará una rutina
              especial adaptada a tus necesidades.
            </p>
          </div>
          <div className={styles.question}>
            <h2>¿Las rutinas son solo para hombres?</h2>
            <p>
              No. Fitfusion está diseñado para todos. Las rutinas se adaptan a
              hombres, mujeres y cualquier persona que desee mejorar su
              condición física.
            </p>
          </div>
          <div className={styles.question}>
            <h2>¿Puedo usar la aplicación sin conexión a internet?</h2>
            <p>
              No. La aplicación requiere una conexión a internet, ya que
              funciona a través de un servidor donde se almacenan y gestionan
              los datos de los usuarios.
            </p>
          </div>
          <div className={styles.question}>
            <h2>¿Necesito obligatoriamente un gimnasio?</h2>
            <p>
              Preferiblemente sí. Muchas de las rutinas están diseñadas para
              aprovechar equipos y máquinas que se encuentran en un gimnasio.
              Sin embargo, algunas rutinas pueden realizarse con equipamiento
              básico en casa.
            </p>
          </div>
          <div className={styles.question}>
            <h2>¿La aplicación registra mi progreso?</h2>
            <p>
              Sí. Fitfusion cuenta con herramientas para monitorear y registrar
              tu progreso, ayudándote a alcanzar tus metas de manera más
              eficiente.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
