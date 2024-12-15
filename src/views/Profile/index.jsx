import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import { FaCog } from "react-icons/fa"; //  tuerca
import Button from '../../components/Button/Button';
import styles from "./Profile.module.scss";
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

const Profile = () => {
  const { user, stats } = useStore();
  const [data, setData] = useState({});
  const [statsData, setStatsData] = useState({});

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    weight: "",
    height: "",
    measureBiceps: "",
    measureChest: "",
    measureWaist: "",
    measureHip: "",
    measureLeg: "",
  });
  
  const handleOptionsClick = (option) => {
    if (option === "update") {
      setIsModalOpen(true); // Abre el modal
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
    

    setIsModalOpen(false); // Cierra el modal
  };

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
                </div>
            </div>

            <div className={styles.leftColumn}>
              <div className={styles.profileImage}></div>
              <p><strong>Nombre:</strong> {data?.name || "No hay nombre disponible"}</p>
              <p><strong>Correo:</strong> {data?.emailUser || "No hay email disponible"}</p>
              <p><strong>Edad:</strong> {calculateAge(data?.birthdate)}</p>
              <p><strong>Fecha de Nacimiento:</strong> {data?.birthdate || "No hay fecha disponible"} </p>
              <p><strong>Telefono:</strong> {data?.phone || "No hay numero telefonico disponible"}</p>
              <p><strong>Rol del usuario:</strong> {data?.role || "No hay rol disponible"}</p>
              <p className={styles.discapacidad}><strong>Discapacidad:</strong> No aplica</p>
            </div>

            <div className={styles.rightColumn}>
              <p><strong>Peso (kg):</strong> {statsData?.weight || "No hay medida"}</p>
              <p><strong>Altura (cm):</strong> {statsData?.height || "No hay medida"}</p>
              <p><strong>Medida en Biceps (cm):</strong> {statsData?.measureBiceps || "No hay medida"}</p>
              <p><strong>Medida en Pecho (cm):</strong> {statsData?.measureChest|| "No hay medida"}</p>
              <p><strong>Medida en Cadera (cm):</strong> {statsData?.measureHip || "No hay medida"}</p>
              <p><strong>Medida en Cintura (cm):</strong> {statsData?.measureWaist || "No hay medida"}</p>
              <p><strong>Medida en Pierna (cm):</strong> {statsData?.measureLeg || "No hay medida"}</p>
            </div>
          </div>

          {isModalOpen && (
  <div className={styles.modal}>
    <div className={styles.modalContent}>
      <h2>Actualizar Datos</h2>
      <form onSubmit={handleFormSubmit} className={styles.form}>
        <div className={styles.form}>
          <label>
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleInputChange}
              placeholder="Ingrese su peso (kg)"
              required
              className={styles.inputField}
            />
          </label>
          <label>
            <input
              type="number"
              name="height"
              value={formData.height}
              onChange={handleInputChange}
              placeholder="Ingrese su altura (cm)"
              required
              className={styles.inputField}
            />
          </label>
          <label>
            <input
              type="number"
              name="measureBiceps"
              value={formData.measureBiceps}
              onChange={handleInputChange}
              placeholder="Medida del bíceps (cm)"
              required
              className={styles.inputField}
            />
          </label>
          <label>
            <input
              type="number"
              name="measureChest"
              value={formData.measureChest}
              onChange={handleInputChange}
              placeholder="Medida del pecho (cm)"
              required
              className={styles.inputField}
            />
          </label>
          <label>
            <input
              type="number"
              name="measureWaist"
              value={formData.measureWaist}
              onChange={handleInputChange}
              placeholder="Medida de la cintura (cm)"
              required
              className={styles.inputField}
            />
          </label>
          <label>
            <input
              type="number"
              name="measureHip"
              value={formData.measureHip}
              onChange={handleInputChange}
              placeholder="Medida de la cadera (cm)"
              required
              className={styles.inputField}
            />
          </label>
          <label>
            <input
              type="number"
              name="measureLeg"
              value={formData.measureLeg}
              onChange={handleInputChange}
              placeholder="Medida de la pierna (cm)"
              required
              className={styles.inputField}
            />
          </label>
        </div>
        <div className={styles.modalButtons}>
          <Button type="submit">
            Guardar
          </Button>
          <Button type="button" onClick={() => setIsModalOpen(false)}>Cancelar</Button>
        </div>
      </form>
    </div>
  </div>
)}

        </main>
        <Footer />
    </div>
  );
};

export default Profile;
