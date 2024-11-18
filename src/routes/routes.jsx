
import { createBrowserRouter }from 'react-router-dom';

import Login from '../views/Login/';
import Register from '../views/Register/';
import Home from '../views/Home/';
import Rutinas from '../views/Rutinas/';
import Estadisticas from '../views/Estadisticas/';
import Perfil from '../views/Perfil/';


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Login />
    },
    {
      path: "register",
      element: <Register />
    },
    {
      path: "home",
      element: <Home />
    },
    {
      path: "rutinas",
      element: <Rutinas />
    },
    {
      path: "estadisticas",
      element: <Estadisticas />
    },
    {
      path: "perfil",
      element: <Perfil />
    }
  ],
  {
    future: {
      v7_skipActionErrorRevalidation: true,
    },
  }
);

export default router;

