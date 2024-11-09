
import { createBrowserRouter }from 'react-router-dom';

import Login from '../views/Login/';
import Register from '../views/Register/'


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Login />
    },
    {
      path: "register",
      element: <Register />
    }
  ],
  {
    future: {
      v7_skipActionErrorRevalidation: true,
    },
  }
);

export default router;

