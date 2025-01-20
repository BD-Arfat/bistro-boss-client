import React from "react";
import { createBrowserRouter } from "react-router-dom";
import OutLets from "../LayOuts/OutLets/OutLets";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Orders from "../Pages/Order/Orders";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Secret from "../Shear/Secret/Secret";
import PrivetRouts from "./PrivetRouts";
import Dashboard from "../LayOuts/Dashboard/Dashboard";
import Carts from "../Pages/Dashboard/Carts/Carts";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <OutLets></OutLets>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/ourMenu",
        element: <Menu></Menu>,
      },
      {
        path: "/order",
        element: <Orders></Orders>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/singUp",
        element: <Register></Register>,
      },
      {
        path : '/secret',
        element : <PrivetRouts><Secret></Secret></PrivetRouts>
      }
    ],
  },
  {
    path : 'dashboard',
    element : <Dashboard></Dashboard>,
    children : [
      {
        path : 'carts',
        element : <Carts></Carts>
      }
    ]
  }
]);

export default Router;
