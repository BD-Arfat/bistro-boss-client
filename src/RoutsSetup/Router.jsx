import React from "react";
import { createBrowserRouter } from "react-router-dom";
import OutLets from "../LayOuts/OutLets/OutLets";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <OutLets></OutLets>,
    children: [
      {
        path: "/",
      },
    ],
  },
]);

export default Router;
