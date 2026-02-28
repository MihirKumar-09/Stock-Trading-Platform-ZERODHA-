export default function Team() {
  return (
    <div className="container">
      <div className="row mb-3">
        <div className="col text-center">
          <h1 style={{ fontSize: "26px", color: "#333538" }}>People</h1>
        </div>
      </div>
      <div className="row p-5">
        <div className="col-6 text-center">
          <img
            src="media/images/people.jpeg"
            alt="People-Img"
            style={{ width: "50%", borderRadius: "100%" }}
          />
          <h6 className="mt-4 mb-3 fs-5 fw-normal">Nithin Kamath</h6>
          <p className="text-muted">Founder, CEO</p>
        </div>
        <div className="col-6">
          <p style={{ fontSize: "17px" }} className="mb-4 mt-3">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p style={{ fontSize: "17px" }} className="mb-4">
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p style={{ fontSize: "17px" }} className="mb-4">
            Playing basketball is his zen.
          </p>
          <p>
            Connect on{" "}
            <a href="" className="text-decoration-none fw-semibold">
              Homepage
            </a>{" "}
            /{" "}
            <a href="" className="text-decoration-none fw-semibold">
              TradingQnA
            </a>{" "}
            /
            <a href="" className="text-decoration-none fw-semibold">
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
