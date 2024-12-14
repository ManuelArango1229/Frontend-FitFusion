import { useForm } from "react-hook-form";
import { loginService } from "../../services/loginService.js";
import { statsService } from "../../services/StatsService.js";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.scss";
import Button from "../../components/Button/Button";
import GoogleButton from "../../components/GoogleButton/GoogleButton";
import useStore from "../../services/statemanagement.js";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { setUser, setStats } = useStore();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    loginService(data.email, data.password).then((result) => {
      const name = result.name;
      if (name) {
        statsService("12345").then((statsResult) => {
          setStats(statsResult);
        });
        setUser(result);
        navigate("/home");
      } else {
        alert("credenciales invalidas");
      }
    });
  };

  const onClickGoogle = () => {
    window.location.href = "http://localhost:3000/api/auth/google";
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        {/* Logo de la empresa - Esto se manejará desde CSS */}
        <div className={styles.companyLogo}></div>

        {/* Título de la aplicación */}
        <h1 className={styles.Ptitle}>FITFUSION</h1>

        {/* Frase inspiradora */}
        <p className={styles.subtitle}>Entrena la mejor versión de ti</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Campos de Email y Password */}
          <input
            {...register("email", { required: true })}
            placeholder="Email"
            className={styles.inputField}
          />
          <input
            {...register("password", { required: true })}
            type="password"
            placeholder="Password"
            className={styles.inputField}
          />

          {/* Enlace de registro */}
          <div className={styles.registerLink}>
            ¿No tienes cuenta? <Link to="/register">Create una</Link>
          </div>

          {/* Botón de login */}
          <Button type="submit">Login</Button>
        </form>

        {/* Texto "O inicia sesión con" */}
        <p className={styles.orText}>O inicia sesión con</p>

        {/* Botón de Google */}
        <GoogleButton onClick={onClickGoogle} />
      </div>

      {/* Contenedor de la imagen lateral */}
      <div className={styles.imageContainer}>
        <div className={styles.largeImage}></div>
      </div>
    </div>
  );
};

export default Login;
