import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/authPage/Login";
import SignUp from "../pages/authPage/SignUp";
import Home from "../pages/home/Home";
import App from "../App";
import AllBooks from "../pages/AllBooks";
import BookDetails from "../pages/BookDetails";
import AddBook from "../pages/AddBook";
import PrivateRoute from "./PrivateRoute";
import EditBook from "../pages/EditBook";
import WishList from "../pages/WishList";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/books",
        element: <AllBooks />,
      },
      {
        path: "/wish-list",
        element: <WishList />,
      },
      {
        path: "/edit-book/:id",
        element: <EditBook />,
      },
      {
        path: "/books/:id",
        element: <BookDetails />,
      },
      {
        path: "/create-book",
        element: (
          <PrivateRoute>
            <AddBook />
          </PrivateRoute>
        ),
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
