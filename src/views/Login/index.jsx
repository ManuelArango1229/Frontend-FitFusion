import { useForm } from 'react-hook-form';
import { useState } from 'react';
import {loginService } from '../../services/loginService.js';
import Cookies from 'js-cookie';
import { Link } from "react-router-dom";

const Loggin = () => {
  const { register, handleSubmit } = useForm();
  const [respuesta, setRespuesta] = useState("");
  const onSubmit = (data) => {
    loginService(data.email, data.password)
      .then( result => {
        setRespuesta(result.message);
        const token = Cookies.get('accessToken');
        console.log('token: ', token);
      }
    )
  }
  const onClickGoogle = () => {
    window.location.href = "http://localhost:3000/api/auth/google";
  }

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Email:
        <input {...register("email", { required: true })} placeholder="Email" />
      </label>
      <label>
        Password:
        <input {...register("password", { required: true })} type="password" placeholder="Password" />
      </label>
      <input type="submit" value="Enviar" />
    </form>
    <div>
      <Link to="/register">Registrarse</Link>
    </div>
    <div>
      <button onClick={onClickGoogle} >Google</button>
      </div>
    <section>
        {respuesta ? respuesta : "no tengo Token"}
    </section>
    </>
  );
};

export default Loggin;
