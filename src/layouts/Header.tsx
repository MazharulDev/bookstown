/* eslint-disable @typescript-eslint/no-floating-promises */
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { signOut } from "firebase/auth";
import { auth } from "../lib/firebase";
import { setUser } from "../redux/features/users/userSlice";

const Header = () => {
  const { user } = useAppSelector((state) => state.user);
  const disPatch = useAppDispatch();
  const handleLogout = () => {
    signOut(auth).then(() => {
      disPatch(setUser(null));
    });
  };
  return (
    <div className="sticky top-0 z-30 ">
      <div className="navbar backdrop-blur ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/books">All Books</Link>
              </li>
              {!user?.email && (
                <li>
                  <Link to="/signup">Sign up</Link>
                </li>
              )}
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost normal-case text-2xl font-extrabold"
          >
            BooksTown
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-end hidden lg:flex mr-5">
            <ul className="menu menu-horizontal px-1 ">
              <li>
                <Link to="/books">All Books</Link>
              </li>
              {!user?.email && (
                <li>
                  <Link to="/signup">Sign up</Link>
                </li>
              )}
            </ul>
          </div>
          {user?.email ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <div className="text-xl h-full text-white bg-primary flex justify-center items-center">
                    {user?.email.substring(0, 1)}
                  </div>
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>{user.email && <p>{user.email}</p>}</li>
                <li>
                  <a className="justify-between">Profile</a>
                </li>
                <li>
                  <a onClick={handleLogout}>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login" className="btn btn-xs btn-primary">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
