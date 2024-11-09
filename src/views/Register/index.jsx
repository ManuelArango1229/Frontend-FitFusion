import {useForm } from 'react-hook-form';
import { registerService } from '../../services/registerService.js'

const Register = () => {

  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    registerService(data.name, data.password, data.option);
  }

    const onClickGoogle = () => {
    window.location.href = "http://localhost:3000/api/auth/google";
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", {required: true})} />
      <input {...register("password", {required: true})} />
      <div>
        <label>
          <input 
            type="radio"
            value="USER"
            {...register("option", {required: "Debes seleccionar una opción"})} />
        User
        </label>
        <label>
          <input 
            type="radio"
            value="TRAINER"
            {...register("option", {required: "Debes seleccionar una opción"})} />
        Trainer
        </label>
      </div>
      <button onClick={onClickGoogle}>Google</button>
      <input type='submit' value="Enviar"/>
    </form>
  );
}

export default Register;
