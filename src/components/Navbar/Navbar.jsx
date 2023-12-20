import { Link, NavLink } from "react-router-dom";
import logo from "/logo.png";
import MenuLinks from "./MenuLinks";
const Navbar = () => {
    const handleSignOut = () => {
        // logOut()
        //   .then()
        //   .catch((error) => console.log(error));
      };
    return (
    <div>
    <div className="navbar bg-violet-400 shadow-lg max-w-screen-xl text-stone-200">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-orange-400  rounded-box w-52 text-black"
          >
            <MenuLinks></MenuLinks>
          </ul>
        </div>
        <Link to="/">
          <div className="btn btn-ghost pr-0 md:pr-4 flex flex-row  justify-center items-center">
            <img className="w-30 sm:w-44" src={logo} alt="Company Logo" />
            {/* <h2 className="normal-case text-xl invisible md:visible">
              {" "}
              Bistro Boss{" "}
            </h2> */}
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {/* <MenuLinks></MenuLinks> */}
        </ul>
      </div>
      <div className="navbar-end ">
        <div className="flex">
          {user ? (
            <>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                  <div className="indicator">
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
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    {/* <span className="badge badge-sm indicator-item text-black">
                      {cart.length}
                    </span> */}
                  </div>
                </label>
                <div
                  tabIndex={0}
                  className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow "
                >
                  <div className="card-body">
                    <span className="font-bold text-lg text-black">
                      {/* {cart.length} Items */} what?
                    </span>
                    {/* <span className="text-info">Subtotal: ${TotalPrice}</span> */}
                    <span className="text-info">Subtotal:</span>
                    <div className="card-actions">
                      <button className="btn btn-warning rounded btn-block">
                        <Link to="/dashboard/cart"> View cart</Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
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
                  {/* <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge badge-neutral">New</span>
                    </a>
                  </li> */}
                  <i className="bg-black hover:bg-red-500 hover:text-white rounded-full my-1">
                    <div style={linkStyle}>
                      <NavLink
                        to="/dashboard"
                        style={({ isActive }) => ({
                          color: isActive ? "white" : "white",
                        
                        })}
                      >
                        Dashboard
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
  )
}

export default Navbar