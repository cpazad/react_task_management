import loginImg from "../../assets/images/hello-profile.gif";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaEnvelope, FaImage } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";
import SocialLogins from "./SocialLogins";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";



const Registration = () => {
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { createUser, handleUpdateProfile } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      handleUpdateProfile(data.name, data.photo)
        .then(() => {
          console.log("profile info got updated");
          const userInfo = {
            name: data.name,
            email: data.email,
            photo: data.photo,
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log("user info sent database");
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User created successfully.",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
            }
          });
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <div>
      <Helmet>
        <title> Task Manager | Registration </title>
      </Helmet>

      <div className="form-container flex-col md:flex-row gap-10">
        {/* image Section */}
        <div className="SM:W-1/2">
          
          <img className="w-[600px]" src={loginImg} alt="" />
        </div>
        {/* Form Section */}
        <div className="wrapper sm:w-1/2 shadow shadow-black">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-2xl font-bold"> Registration </h2>
            <div className="input-box">
              <input
                className="placeholder-opacity-100"
                type="text"
                {...register("name", { required: true })}
                placeholder="Name"
                required
              />
              <i>
                <FaUser className="inline"></FaUser>
              </i>
              {errors.name && (
                <span className="text-red-600">Name is required</span>
              )}
            </div>
            <div className="input-box">
              <input
                className="placeholder-opacity-100"
                type="email"
                {...register("email", { required: true })}
                placeholder="email"
                required
              />
              <i>
                <FaEnvelope className="inline"></FaEnvelope>
              </i>
              {errors.email && (
                <span className="text-red-600">Email is required</span>
              )}
            </div>
            <div className="input-box">
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                placeholder="password"
                required
              />
              <i>
                <FaLock className="inline"></FaLock>
              </i>
              {errors.password?.type === "required" && (
                <p className="text-red-600">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600">Password must be 6 characters</p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-600">
                  Password must be less than 20 characters
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <div
                  className="tooltip tooltip-open tooltip-left"
                  data-tip="Password must have one Uppercase one lower case, one number and one special character."
                >
                  <button className="btn"></button>
                </div>
              )}
            </div>
            <div className="input-box">
              <input
                className="placeholder-opacity-100"
                type="text"
                {...register("photo", { required: true })}
                placeholder="Insert Photo Url"
              />
              <i>
                <FaImage className="inline"></FaImage>
              </i>
              {errors.photoURL && (
                <span className="text-red-600">Photo URL is required</span>
              )}
            </div>
            <button
              className="btn btn-block rounded-full bg-red-800 hover:bg-black text-white"
              type="submit"
            >
              {" "}
              Sign Up{" "}
            </button>
            <div className="register-link py-5">
              <p>
                {" "}
                Already have account!{" "}
                <Link to="/login">
                  {" "}
                  <span className="text-violet-400 font-bold hover:underline">
                    Log In
                  </span>{" "}
                </Link>
              </p>
            </div>
          </form>
          {/* Social Login */}
          <SocialLogins></SocialLogins>
        </div>
      </div>
    </div>
  );
};

export default Registration;
