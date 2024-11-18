import React from 'react';
import { useForm } from 'react-hook-form';
import { registerService } from '../../services/registerService.js';
import Button from '../../components/Button/Button';
import GoogleButton from '../../components/GoogleButton/GoogleButton';
import styles from './Register.module.scss';

const Register = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    registerService(data.name, data.password, data.option);
  };

  const onClickGoogle = () => {
    window.location.href = "http://localhost:3000/api/auth/google";
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        {/* Logo de la empresa */}
        <div className={styles.companyLogo}></div>

        {/* Título de la aplicación */}
        <h1 className={styles.Ptitle}>REGÍSTRATE CON NOSOTROS</h1>

        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          {/* Campos de Nombre y Password */}
          <input
            {...register("name", { required: true })}
            placeholder="Nombre*"
            className={styles.inputField}
          />
          <input
            {...register("password", { required: true })}
            type="password"
            placeholder="Password*"
            className={styles.inputField}
          />

          {/* Contenedor principal de las opciones de radio */}
          <div className={styles.radioOptionsContainer}>
            <div className={styles.radioOptions}>
              <input
                type="radio"
                id="user"
                value="USER"
                {...register("option", { required: "Debes seleccionar una opción" })}
                className={styles.radioInput}
              />
              <label htmlFor="user" className={styles.radioLabel}>User</label>

              <input
                type="radio"
                id="trainer"
                value="TRAINER"
                {...register("option", { required: "Debes seleccionar una opción" })}
                className={styles.radioInput}
              />
              <label htmlFor="trainer" className={styles.radioLabel}>Trainer</label>
            </div>
          </div>

          {/* Botón de registro */}
          <div className={styles.googleButtonContainer}>
          <Button type="submit">
            Registrar
          </Button>
          </div>

          {/* Texto "O registra con" */}
          <p className={styles.orText}>O regístrate con</p>

          {/* Contenedor del botón de Google */}
          <div className={styles.googleButtonContainer}>
            <GoogleButton onClick={onClickGoogle} />
          </div>

          {/* Enlace de inicio de sesión */}
          <p className={styles.loginLink}>
            ¿Ya tienes una cuenta? <a href="/">Iniciar sesión</a>
          </p>
        </form>
      </div>

      {/* Contenedor de la imagen de fondo */}
      <div className={styles.imageBackground}></div>
    </div>
  );
};

export default Register;
