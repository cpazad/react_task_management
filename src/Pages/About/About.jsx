import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>Task Manager : About </title>
      </Helmet>
      <div className="py-2 sm:py-10 sm:px-20 lg:px-48 px-10 bg-slate-800">
        {" "}
        <p className="font-popins text-xl sm:text-xl md:text-2xl font-thin text-white">
          Welcome to ContestHub, the ultimate platform where innovation meets
          recognition! ContestHub is a dynamic and user-friendly Project Contest
          Creation Platform designed to foster creativity, engage communities,
          and celebrate talent across various domains. Whether you are
          organizing a design competition, coding challenge, or any other
          creative contest, ContestHub is your go-to destination for seamless
          contest creation and efficient winner selection.
        </p>{" "}
      </div>
      <div className="hero min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/2">
            <img
              src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
              className="max-w-sm rounded-lg shadow-2xl"
            />
          </div>

          <div className="w-1/2 ">
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
