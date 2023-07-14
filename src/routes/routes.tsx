import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/authPage/Login";
import SignUp from "../pages/authPage/SignUp";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
