import { useNavigate } from "react-router-dom";
import useStore from "../../services/statemanagement.js";
import { onSubmit, onClickGoogle } from "./logic/utilities.js";
import { Suspense, lazy } from 'react';
import styles from "./styles/Login.module.scss";


const LoginForm = lazy(() => import('./components/LoginForm'));
const GoogleLoginButton = lazy(() => import('./components/GoogleLoginButton'));

const Login = () => {
  const { setUser, setStats, setRoutine } = useStore();
  const navigate = useNavigate();

  const handleFormSubmit = (data) => {
    onSubmit(data, setStats, setRoutine, setUser, navigate);
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.companyLogo}></div>
        <h1 className={styles.Ptitle}>FITFUSION</h1>
        <p className={styles.subtitle}>Entrena la mejor versión de ti</p>
        <Suspense fallback={<div>Loading...</div>}>
          <LoginForm onSubmit={handleFormSubmit} />
          <GoogleLoginButton onClick={onClickGoogle} />
        </Suspense>
      </div>
      <div className={styles.imageContainer}>
        <div className={styles.largeImage}></div>
      </div>
    </div>
  );
};

export default Login;
