import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import React from "react";
import SignIn from "../components/Reguster/SignIn";
import SignUp from "../components/Reguster/SignUp";
import Coin from "../pages/Coin";
import MainLayout from "../components/Layout/MainLayout";
const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index : true,
        element: <Home />,
      },
      {
        path: "/coin/:symbol",
        element: <Coin />,
      },
    ],
  },

  {
    path: "/register",
    element: <Register />,
    children: [
      { path: "signin", element: <SignIn /> },
      { path: "signup", element: <SignUp /> },
    ],
  },
];

const Routes = () => {
  return useRoutes(routes);
};
export default Routes;
