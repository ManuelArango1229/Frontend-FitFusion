import React from "react";
import styles from "../Profile.module.scss";
import PropTypes from "prop-types";

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

const ProfileLeftColumn = ({ user }) => {
  return (
    <div className={styles.leftColumn}>
      <div className={styles.profileImage}></div>
      <p><strong>Nombre:</strong> {user?.name || "No hay nombre disponible"}</p>
      <p><strong>Correo:</strong> {user?.emailUser || "No hay email disponible"}</p>
      <p><strong>Edad:</strong> {calculateAge(user?.birthdate)}</p>
      <p><strong>Fecha de Nacimiento:</strong> {user?.birthdate || "No hay fecha disponible"}</p>
      <p><strong>Teléfono:</strong> {user?.phone || "No hay número telefónico disponible"}</p>
      <p><strong>Rol del usuario:</strong> {user?.role || "No hay rol disponible"}</p>
      <p className={styles.discapacidad}><strong>Discapacidad:</strong> No aplica</p>
    </div>
  );
};

ProfileLeftColumn.propTypes = {
    user: PropTypes.object.isRequired,
    };

export default React.memo(ProfileLeftColumn);
