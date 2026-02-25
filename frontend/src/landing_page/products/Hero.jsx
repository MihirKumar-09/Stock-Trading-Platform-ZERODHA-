export default function Hero() {
  return (
    <div className="container p-5 mt-3 mb-5">
      <div className="row text-center">
        <h4 className="mt-5 fs-2 mb-3" style={{ color: "#434343" }}>
          Zerodha Products
        </h4>
        <h5 className="fs-5 fw-normal mb-4" style={{ color: "#5b5a5a" }}>
          Sleek, modern, and intuitive trading platforms
        </h5>
        <h6 className="fw-normal" style={{ fontSize: "1.1rem" }}>
          Check out our{" "}
          <a href="" className="text-decoration-none fw-medium">
            investment offering
          </a>{" "}
          <i className="fa-solid fa-arrow-right-long"></i>
        </h6>
      </div>
    </div>
  );
}
