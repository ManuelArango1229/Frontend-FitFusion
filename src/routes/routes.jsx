
import { createBrowserRouter }from 'react-router-dom';

import Login from '../views/Login/';
import Register from '../views/Register/'
import Home from '../views/Home/'


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
    }
  ],
  {
    future: {
      v7_skipActionErrorRevalidation: true,
    },
  }
);

export default router;

