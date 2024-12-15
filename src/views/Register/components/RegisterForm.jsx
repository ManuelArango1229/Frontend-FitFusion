import { useForm } from "react-hook-form";
import React from "react";
import Button from "../../../components/Button/Button";
import styles from "../Register.module.scss";
import PropTypes from "prop-types";

const RegisterForm = ({ onSubmit, onClickGoogle }) => {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <input
        {...register("email", { required: true })}
        placeholder="email*"
        className={styles.inputField}
      />
      <input
        {...register("name", { required: true })}
        placeholder="Nombre*"
        className={styles.inputField}
      />
      <input
        {...register("fechaNacimiento", { required: true })}
        placeholder="Fecha de Nacimiento*"
        className={styles.inputField}
      />
      <input
        {...register("telefono", { required: true })}
        placeholder="Telefono*"
        className={styles.inputField}
      />
      <input
        {...register("password", { required: true })}
        type="password"
        placeholder="Password*"
        className={styles.inputField}
      />

      <div className={styles.radioOptionsContainer}>
        <div className={styles.radioOptions}>
          <input
            type="radio"
            id="user"
            value="USER"
            {...register("option", { required: "Debes seleccionar una opción" })}
            className={styles.radioInput}
          />
          <label htmlFor="user" className={styles.radioLabel}>
            User
          </label>

          <input
            type="radio"
            id="trainer"
            value="TRAINER"
            {...register("option", { required: "Debes seleccionar una opción" })}
            className={styles.radioInput}
          />
          <label htmlFor="trainer" className={styles.radioLabel}>
            Trainer
          </label>
        </div>
      </div>

      <Button type="submit">Registrar</Button>
      <p className={styles.orText}>O regístrate con</p>

      <div className={styles.googleButtonContainer}>
        <button type="button" onClick={onClickGoogle} className={styles.googleButton}>
          Regístrate con Google
        </button>
      </div>

      <p className={styles.loginLink}>
        ¿Ya tienes una cuenta? <a href="/">Iniciar sesión</a>
      </p>
    </form>
  );
};

RegisterForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onClickGoogle: PropTypes.func.isRequired,
    };
export default React.memo(RegisterForm);
