
import { createBrowserRouter }from 'react-router-dom';

import Login from '../views/Login/';
import Register from '../views/Register/';
import Home from '../views/Home/';
import Rutinas from '../views/Rutinas/';
import DayOne from '../views/Rutinas/Days/dayOne/';
import DayTwo from '../views/Rutinas/Days/dayTwo/';
import DayThree from '../views/Rutinas/Days/dayThree/';
import DayFour from '../views/Rutinas/Days/dayFour/';
import Terms from '../views/TerminosCondiciones/';
import FAQ from '../views/FAQ/';
import About from '../views/About/';
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
      path: "routines",
      element: <Rutinas />
    },
    {
      path: "estadisticas",
      element: <Estadisticas />
    },
    {
      path: "perfil",
      element: <Perfil />
    },
    {
      path: "dayOne",
      element: <DayOne />
    },
    {
      path: "dayTwo",
      element: <DayTwo />
    },
    {
      path: "dayThree",
      element: <DayThree />
    },
    {
      path: "dayFour",
      element: <DayFour />
    },
    {
      path: "Terms",
      element: <Terms />
    },
    {
      path: "faq",
      element: <FAQ />
    },
    {
      path: "about",
      element: <About />
    }

  ],
  {
    future: {
      v7_skipActionErrorRevalidation: true,
    },
  }
);

export default router;

