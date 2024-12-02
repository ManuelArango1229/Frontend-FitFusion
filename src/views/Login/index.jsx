import { useForm } from 'react-hook-form';
import { loginService } from '../../services/loginService.js';
import { Link } from "react-router-dom";
import styles from './Login.module.scss';
import Button from '../../components/Button/Button';
import GoogleButton from '../../components/GoogleButton/GoogleButton';
import { useNavigate } from 'react-router';
import { useDataUserStore } from '../../services/state/userDataStore'


const Loggin = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const setEmail = useDataUserStore(state => state.setUserEmail);
  const setRole = useDataUserStore(state => state.setUserRole);
  const setId = useDataUserStore(state => state.setUserId);
  const setName = useDataUserStore(state => state.setUserName);
  const setBirthDay = useDataUserStore(state => state.setUserBirthDay);
  const setPhone = useDataUserStore(state => state.setUserPhone);
  
  const onSubmit = (data) => {
    loginService(data.email, data.password)
      .then(result => {
        console.log(result);
        setId(result.id);
        setEmail(result.emailUser);
        setRole(result.role);
        setName(result.name);
        setBirthDay(result.birthdate);
        setPhone(result.phone);
        navigate("/home");
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

export default Loggin;
