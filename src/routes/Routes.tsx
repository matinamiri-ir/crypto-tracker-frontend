import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import React from "react";
import SignIn from "../components/Reguster/SignIn";
import SignUp from "../components/Reguster/SignUp";
import Coin from "../pages/Coin";
import MainLayout from "../components/Layout/MainLayout";
import Dashboard from "../pages/Dashboard";
import AuthSuccess from "../pages/AuthSuccess";
import Markets from "../pages/Markets";
import Trade from "../pages/Trade";
import Exchange from "../pages/Exchange";
import Buy from "../components/exchange/buy";
import Sell from "../components/exchange/sell";
const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/coin/:symbol",
        element: <Coin />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/markets",
        element: <Markets />,
      },
      { path: "trade/:symbol", element: <Trade /> },
      {
        path: "exchange",
        element: <Exchange />,
        children: [
          { path: "buy", element: <Buy /> },
          { path: "Sell", element: <Sell /> },
        ],
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthSuccess />,
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
