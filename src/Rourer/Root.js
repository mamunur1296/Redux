import { createBrowserRouter } from "react-router-dom";
import About from "../Components/Home/About";
import Home from "../Components/Home/Home";
import Login from "../Components/Home/Login";
import Regester from "../Components/Home/Regester";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/regester",
        element: <Regester></Regester>,
      },
    ],
  },
]);
