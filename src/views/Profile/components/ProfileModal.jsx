import React, { useState } from "react";
import Button from "../../../components/Button/Button";
import { statsUpdateService } from "../../../services/StatsService";
import styles from "../Profile.module.scss";
import PropTypes from "prop-types";

const ProfileModal = ({ onClose, userId }) => {
  const [formData, setFormData] = useState({
    weight: "",
    height: "",
    biceps: "",
    chest: "",
    waist: "",
    hip: "",
    leg: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    statsUpdateService(userId, formData);
    onClose();
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2>Actualizar Datos</h2>
        <form onSubmit={handleFormSubmit} className={styles.form}>
          {Object.keys(formData).map((key) => (
            <label key={key}>
              <input
                type="number"
                name={key}
                value={formData[key]}
                onChange={handleInputChange}
                placeholder={`Ingrese ${key} en cm`}
                required
                className={styles.inputField}
              />
            </label>
          ))}
          <div className={styles.modalButtons}>
            <Button type="submit">Guardar</Button>
            <Button type="button" onClick={onClose}>Cancelar</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

ProfileModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    userId: PropTypes.string.isRequired,
    };
export default React.memo(ProfileModal);
