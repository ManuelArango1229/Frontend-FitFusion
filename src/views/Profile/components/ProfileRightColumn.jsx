import React from "react";
import styles from "../Profile.module.scss";
import PropTypes from "prop-types";

const ProfileRightColumn = ({ stats }) => {
  return (
    <div className={styles.rightColumn}>
      <p><strong>Peso (kg):</strong> {stats?.weight || "No hay medida"}</p>
      <p><strong>Altura (cm):</strong> {stats?.height || "No hay medida"}</p>
      <p><strong>Medida en Bíceps (cm):</strong> {stats?.measureBiceps || "No hay medida"}</p>
      <p><strong>Medida en Pecho (cm):</strong> {stats?.measureChest || "No hay medida"}</p>
      <p><strong>Medida en Cadera (cm):</strong> {stats?.measureHip || "No hay medida"}</p>
      <p><strong>Medida en Cintura (cm):</strong> {stats?.measureWaist || "No hay medida"}</p>
      <p><strong>Medida en Pierna (cm):</strong> {stats?.measureLeg || "No hay medida"}</p>
    </div>
  );
};

ProfileRightColumn.propTypes = {
    stats: PropTypes.object.isRequired,
    };

export default React.memo(ProfileRightColumn);
