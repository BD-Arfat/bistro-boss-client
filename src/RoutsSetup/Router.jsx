import React from "react";
import { createBrowserRouter } from "react-router-dom";
import OutLets from "../LayOuts/OutLets/OutLets";
import Home from "../Pages/Home/Home/Home";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <OutLets></OutLets>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);

export default Router;
