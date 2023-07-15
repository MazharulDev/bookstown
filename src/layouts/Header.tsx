import { Link } from "react-router-dom";

const Header = () => {
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
                <a>All Books</a>
              </li>
              <li>
                <a>Create Account</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-2xl font-extrabold">
            BooksTown
          </a>
        </div>

        <div className="navbar-end">
          <div className="navbar-end hidden lg:flex mr-5">
            <ul className="menu menu-horizontal px-1 ">
              <li className="border-r-2">
                <a>All Books</a>
              </li>
              <li>
                <Link to="/signup">Sign up</Link>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
