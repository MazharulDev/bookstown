import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/authPage/Login";
import SignUp from "../pages/authPage/SignUp";
import Home from "../pages/home/Home";
import App from "../App";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

export default routes;
