import React from "react";
import { createBrowserRouter } from "react-router-dom";
import OutLets from "../LayOuts/OutLets/OutLets";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";

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
    ],
  },
]);

export default Router;
