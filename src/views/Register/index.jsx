

import { useNavigate } from "react-router-dom";
import { registerService } from "../../services/registerService.js";
import RegisterForm from "./components/RegisterForm";
import styles from "./Register.module.scss";

const Register = () => {
  const navigate = useNavigate();

  const onSubmit = (data) => {
    registerService(data.email, data.password, data.option, data.name, data.fechaNacimiento, data.telefono);
    navigate("/");
  };

  const onClickGoogle = () => {
    window.location.href = "http://localhost:3000/api/auth/google";
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.companyLogo}></div>
        <h1 className={styles.Ptitle}>REGÍSTRATE CON NOSOTROS</h1>

        <RegisterForm onSubmit={onSubmit} onClickGoogle={onClickGoogle} />
      </div>

      <div className={styles.imageBackground}></div>
    </div>
  );
};

export default Register;
