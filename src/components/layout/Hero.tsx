import Logo from "../common/Logo";

const Hero = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-1"></div>
          <div className="col-5 mb-4 mb-md-0 text-center text-md-start">
            <Logo size={50} /> <br />
            <h2>Your neuroscience-based learning assistant.</h2>
            <button className="btn btn-outline-dark mt-3">
              Start Learning
            </button>
          </div>
          <div
            className="col-6"
            style={{ height: "600px" }}
          >
            <div
              style={{ height: "20%" }}
              className="d-flex justify-content-center align-items-center"
            >
            </div>
            <div
              style={{ height: "80%" }}
              className="d-flex justify-content-center align-items-center bg-secondary text-white"
            >
              <span>Image of using the app.</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
