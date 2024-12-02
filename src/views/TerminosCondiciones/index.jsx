import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './Terms.module.scss';

const Terms = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imageBackground}></div>
            <Header />
            <main className={styles.main}>
                <h1>Términos y Condiciones</h1>
                    <section className={styles.content}>
                <p>
                    Bienvenido a Fitfusion. Al utilizar esta aplicación, aceptas los siguientes términos y condiciones:
                    </p>
                <ul>
                    <li>
                     <strong>Uso de la plataforma:</strong> La plataforma está diseñada para uso personal y no debe ser utilizada con fines comerciales sin autorización.
                 </li>
                    <li>
                     <strong>Política de privacidad:</strong> Nos comprometemos a proteger tu información personal de acuerdo con nuestras políticas.
                    </li>
                    <li>
                      <strong>Modificaciones:</strong> Los términos pueden cambiar sin previo aviso. Recomendamos revisar esta página regularmente.
                  </li>
                 </ul>
                 <p>Gracias por elegir Fitfusion. ¡Esperamos que disfrutes tu experiencia!</p>
                </section>
            </main>
      <Footer />
    </div>
  );
};

export default Terms;
