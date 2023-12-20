import { Link } from "react-router-dom";
// import notfound from "../../assets/images/404.gif";

const ErrorPage = () => {
  return (
    <div className="hero min-h-screen bg-[#b2f2e5]">
      <div className="hero-content text-center">
        <div className="max-w-md">
          {/* <img src={notfound} alt="" /> */}
          <h1 className="text-4xl font-extrabold"> !Oops </h1>
          <p className="py-6 text-2xl font-bold  italic">
            Something Went Wrong
          </p>

          <Link to="/">
            <button className="btn btn-outline text-black">
              {" "}
              Go to Home Page
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
