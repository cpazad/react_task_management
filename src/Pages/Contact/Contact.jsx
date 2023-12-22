const Contact = () => {
  return (
    <div className="bg-slate-800">
      <div className="hero min-h-screen bg-myblack">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center text-slate-100 w-full md:w-1/2 lg:text-left md:px-24">
            <h1 className="text-5xl font-bold">Contact Us!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full md:w-1/2 max-w-sm shadow-2xl bg-slate-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <textarea
                  type="text"
                  placeholder="Insert your comments here"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary bg-violet-400">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Contact;
