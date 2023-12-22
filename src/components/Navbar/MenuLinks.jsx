import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";


const MenuLinks = () => {
  const linkStyle = {
    margin: "10px",
  };
    const { user } = useAuth();
  return (
    <>
      <i>
        <div style={linkStyle}>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "red" : "white",
            })}
          >
            Home
          </NavLink>
        </div>
      </i>
      <i>
        <div style={linkStyle}>
          <NavLink
            to="/about"
            style={({ isActive }) => ({
              color: isActive ? "red" : "white",
            })}
          >
            About
          </NavLink>
        </div>
      </i>

      {user && (
        <>
          <i>
            <div style={linkStyle}>
              <NavLink
                to="/dashboard/task-manager"
                style={({ isActive }) => ({
                  color: isActive ? "red" : "white",
                })}
              >
                Task Manager
              </NavLink>
            </div>
          </i>
        </>
      )}

      <i>
        <div style={linkStyle}>
          <NavLink
            to="/contact"
            style={({ isActive }) => ({
              color: isActive ? "red" : "white",
            })}
          >
            Contact Us
          </NavLink>
        </div>
      </i>
    </>
  );
};

export default MenuLinks;
