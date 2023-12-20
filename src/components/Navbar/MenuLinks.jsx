import { NavLink } from "react-router-dom";
// import useAuth from "../../../Hooks/useAuth";

const MenuLinks = () => {
  const linkStyle = {
    margin: "10px",
  };
//   const { user } = useAuth();
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
            to="/allcontest/gaming"
            style={({ isActive }) => ({
              color: isActive ? "red" : "white",
            })}
          >
            All Contests
          </NavLink>
        </div>
      </i>

      {user && (
        <>
          <i>
            <div style={linkStyle}>
              <NavLink
                to="/dashboard"
                style={({ isActive }) => ({
                  color: isActive ? "red" : "white",
                })}
              >
                Pricing
              </NavLink>
            </div>
          </i>

          <i>
            <div style={linkStyle}>
              <NavLink
                to="/leaderboard"
                style={({ isActive }) => ({
                  color: isActive ? "red" : "white",
                })}
              >
                Leaderboard
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
      {/* <i>
        <div style={linkStyle}>
          <NavLink
            to="/test"
            style={({ isActive }) => ({
              color: isActive ? "red" : "white",
            })}
          >
            Test
          </NavLink>
        </div>
      </i> */}
    </>
  );
};

export default MenuLinks;
