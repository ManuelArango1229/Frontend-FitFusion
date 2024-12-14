import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { FaCog } from "react-icons/fa"; // Importa el icono de la tuerca
import styles from "./Perfil.module.scss";
import useStore from "../../services/statemanagement.js";
import { useState, useEffect } from "react";

const calculateAge = (birthdate) => {
  if (!birthdate) return "No disponible";
  const birthDateObj = new Date(birthdate);
  const today = new Date();
  let age = today.getFullYear() - birthDateObj.getFullYear();
  const monthDiff = today.getMonth() - birthDateObj.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
    age--;
  }
  return age;
};

const Perfil = () => {
  const { user, stats } = useStore();
  const [data, setData] = useState({});
  const [statsData, setStatsData] = useState({});
  
  const handleOptionsClick = (option) => {
    if (option === 'update') {
      console.log('Actualizar datos');
    } else if (option === 'delete') {
      console.log('Eliminar cuenta');
    }
  }

  useEffect(() => {
    setData(user);
    if (stats){
      setStatsData(stats.currentStats);
    }
  }, [user, stats]);

  return (
    <div className={styles.container}>
      <div className={styles.imageBackground}></div>
        <Header />
        <main className={styles.main}>
          <h1 className={styles.title}>Perfil de Usuario</h1>
          <div className={styles.profileContainer}>
            <div className={styles.settingsButton}>
              <FaCog />
                <div className={styles.dropdownMenu}>
                  <button onClick={() => handleOptionsClick('update')}>Actualizar datos</button>
                  <button onClick={() => handleOptionsClick('delete')}>Eliminar cuenta</button>
                </div>
            </div>

            <div className={styles.leftColumn}>
              <div className={styles.profileImage}></div>
              <p><strong>Nombre:</strong> {data?.name || "No hay nombre disponible"}</p>
              <p><strong>ID:</strong> {data?.id || "No hay id disponible"}</p>
              <p><strong>Correo:</strong> {data?.emailUser || "No hay email disponible"}</p>
              <p><strong>Edad:</strong> {calculateAge(data?.birthdate)}</p>
              <p><strong>Fecha de Nacimiento:</strong> {data?.birthdate || "No hay fecha disponible"} </p>
              <p><strong>Telefono:</strong> {data?.phone || "No hay numero telefonico disponible"}</p>
              <p><strong>Rol del usuario:</strong> {data?.role || "No hay rol disponible"}</p>
            </div>

            <div className={styles.rightColumn}>
              <p><strong>Peso:</strong> {statsData?.weight || "No hay medida"}</p>
              <p><strong>Altura:</strong> {statsData?.height || "No hay medida"}</p>
              <p><strong>Medida en Biceps:</strong> {statsData?.measureBiceps || "No hay medida"}</p>
              <p><strong>Medida en Pecho:</strong> {statsData?.measureChest|| "No hay medida"}</p>
              <p><strong>Medida en Cadera:</strong> {statsData?.measureHip || "No hay medida"}</p>
              <p><strong>Medida en Cintura:</strong> {statsData?.measureWaist || "No hay medida"}</p>
              <p><strong>Medida en Pierna:</strong> {statsData?.measureLeg || "No hay medida"}</p>
            </div>
          </div>
        </main>
        <Footer />
    </div>
  );
};

export default Perfil;
