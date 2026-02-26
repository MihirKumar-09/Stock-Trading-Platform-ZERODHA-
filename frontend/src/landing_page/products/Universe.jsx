export default function Universe() {
  return (
    <div className="container">
      <div className="row">
        <p className="text-center mb-5" style={{ fontSize: "21px" }}>
          Want to know more about our technology stack? Check out the{" "}
          <a href="" className="text-decoration-none">
            Zerodha.tech
          </a>{" "}
          blog.
        </p>
        <h4 className="text-center mt-5 mb-4" style={{ color: "#414141" }}>
          The Zerodha Universe
        </h4>
        <p className="text-center" style={{ fontSize: "17px" }}>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="row">
          <div className="col p-5 text-center">
            <img
              src="media/images/zerodhaFundhouse.png"
              alt="Zerodha-Found-House"
              style={{ width: "45%" }}
            />
            <p
              className="text-center text-muted mt-3"
              style={{ fontSize: "14px" }}
            >
              Our asset management venture <br /> that is creating simple and
              transparent index <br />
              funds to help you save for your goal
            </p>
          </div>
          <div className="col p-5 text-center">
            <img
              src="media/images/sensibullLogo.svg"
              alt="Sensibull-Logo"
              style={{ width: "50%" }}
            />
            <p
              className="text-center text-muted mt-3"
              style={{ fontSize: "14px" }}
            >
              Options trading platform that lets you <br /> create strategies,
              analyze positions, and examine <br /> data points like open
              interest, FII/DII, and more.
            </p>
          </div>
          <div className="col p-5 text-center">
            <img
              src="media/images/tijori.svg"
              alt="Tijori-Logo"
              style={{ width: "35%" }}
            />
            <p
              className="text-center text-muted mt-3"
              style={{ fontSize: "14px" }}
            >
              Investment research platform <br /> that offers detailed insights
              on stocks, <br /> sectors, supply chains, and more.
            </p>
          </div>
        </div>
        {/* ============ */}

        <div className="row">
          <div className="col p-5 text-center">
            <img
              src="media/images/streakLogo.png"
              alt="Zerodha-Found-House"
              style={{ width: "45%" }}
            />
            <p
              className="text-center text-muted mt-3"
              style={{ fontSize: "14px" }}
            >
              Systematic trading platform <br /> that allows you to create and
              backtest <br />
              strategies without coding.
            </p>
          </div>
          <div className="col p-5 text-center">
            <img
              src="media/images/smallcaseLogo.png"
              alt="Sensibull-Logo"
              style={{ width: "52%" }}
            />
            <p
              className="text-center text-muted mt-3"
              style={{ fontSize: "14px" }}
            >
              Thematic investing platform <br /> that helps you invest in
              diversified <br />
              baskets of stocks on ETFs.
            </p>
          </div>
          <div className="col p-5 text-center">
            <img
              src="media/images/dittoLogo.png"
              alt="Tijori-Logo"
              style={{ width: "35%" }}
            />
            <p
              className="text-center text-muted mt-3"
              style={{ fontSize: "14px" }}
            >
              Personalized advice on life and health insurance. No spam and no
              mis-selling
            </p>
          </div>
        </div>

        <button
          style={{
            width: "14%",
            fontSize: "20px",
            padding: "8px 10px 8px 10px",
            margin: "0 auto",
          }}
          className=" text-center fw-semibold btn btn-primary mb-5"
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}
