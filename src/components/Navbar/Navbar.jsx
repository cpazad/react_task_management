import { Link, NavLink } from "react-router-dom";
import logo from "/logo.png";
import MenuLinks from "./MenuLinks";
import useAuth from "../../Hooks/useAuth";
const Navbar = () => {
  const { user, logOut } = useAuth();
  const handleSignOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  const linkStyle = {
    margin: "10px",
    // textAlign:"left"
  };
  return (
    <div>
      <div className="navbar bg-slate-900 shadow-lg  text-stone-200">
        <div className="navbar-start">
          {/* Mobile Menu */}
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-900  rounded-box w-52 text-black"
            >
              <MenuLinks></MenuLinks>
            </ul>
          </div>
          <Link to="/">
            <div className="btn btn-ghost bg-stone-100/50  pr-0 md:pr-4 flex flex-row  justify-center items-center">
              <img className="w-30 sm:w-44 " src={logo} alt="Company Logo" />
              {/* <h2 className="normal-case text-xl invisible md:visible">
              {" "}
              Bistro Boss{" "}
            </h2> */}
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <MenuLinks></MenuLinks>
          </ul>
        </div>
        <div className="navbar-end ">
          <div className="flex">
            {user ? (
              <>
              
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img src={user.photoURL} />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black"
                  >
                    <p className="text-mybrown text-sm text-center">
                      Welcome! {user.displayName}
                    </p>
               
                    <i className="bg-black hover:bg-red-500 hover:text-white rounded-full my-1">
                      <div style={linkStyle}>
                        <NavLink
                         to="/dashboard/task-manager"
                          style={({ isActive }) => ({
                            color: isActive ? "white" : "white",
                          })}
                        >
                          Task Manager 
                        </NavLink>
                      </div>
                    </i>
                    <li>
                      <button
                        onClick={handleSignOut}
                        className="btn rounded-full btn-sm btn-outline border-0 text-white bg-red-800 hover:bg-black hover:text-white capitalize"
                      >
                        {" "}
                        Log Out{" "}
                      </button>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <Link to="/login">
                {" "}
                <button className="btn rounded-full btn-sm btn-outline border-0 text-white bg-red-800 hover:bg-black hover:text-white capitalize">
                  {" "}
                  Log In{" "}
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
