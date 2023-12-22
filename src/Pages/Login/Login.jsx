import "./sign.css";
import loginImg from "../../assets/images/hello-profile.gif";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import Swal from "sweetalert2";
import SocialLogins from "./SocialLogins";
import useAuth from "../../Hooks/useAuth";
import 'sweetalert2/src/sweetalert2.scss'


const Login = () => {

  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  console.log("state in the location login page", location.state);

  
  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "User Login Successful.",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      navigate(from, { replace: true });
    });
  };
  return (
    <div>
      <div className="form-container flex flex-col md:flex-row gap-10">
        {/* Image section */}
        <div className="SM:W-1/2">
          <img className="w-[600px]" src={loginImg} alt="" />
        </div>
        {/* Form Section */}
        <div className="wrapper sm:w-1/2 shadow shadow-black">
          {/* <div className="flex justify-center">
            <Link to="/">
             <button className="btn bg-red-900 text-white rounded-full" > Go back Home </button>
            </Link>
          </div> */}
          <form onSubmit={handleLogIn}>
            <h2 className="text-2xl font-bold"> Log In </h2>
            <div className="input-box">
              <input
                className="placeholder-opacity-100"
                type="email"
                name="email"
                placeholder="email"
                required
              />
              <i>
                <FaUser className="inline"></FaUser>
              </i>
            </div>
            <div className="input-box">
              <input
                type="password"
                name="password"
                placeholder="password"
                required
              />
              <i>
                <FaLock className="inline"></FaLock>
              </i>
            </div>
            <button className="btn btn-block rounded-full bg-red-800 hover:bg-black text-white" type="submit">
              {" "}
              Log In Now {" "}
            </button>
          </form>
          {/* Social Login */}
          <SocialLogins></SocialLogins>
          <div className="register-link py-5">
            <p>
              {" "}
              Don not have account yet?{" "}
              <Link to="/registration">
                {" "}
                <span className="text-violet-400 font-bold hover:underline">
                  {" "}
                  Sign Up{" "}
                </span>{" "}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
