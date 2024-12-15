
import { useForm } from "react-hook-form";
import Button from "../../../components/Button/Button";
import styles from "../styles/Login.module.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";


const LoginForm = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();

  return (
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
      <div className={styles.registerLink}>
        ¿No tienes cuenta? <Link to="/register">Crea una</Link>
      </div>
      <Button type="submit">Login</Button>
    </form>
  );
};

LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

export default LoginForm;
