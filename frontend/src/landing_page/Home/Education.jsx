export default function Education() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img
            src="media/images/education.svg"
            alt="Education Image"
            style={{ width: "70%" }}
          />
        </div>
        <div className="col-6">
          <h1 className="mb-5 fs-2">Free and open market education</h1>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basic to advance trading
          </p>
          <a href="#" style={{ textDecoration: "none" }}>
            Versity<i className="fa-solid fa-arrow-right-long mx-1"></i>
          </a>
          <p className="mt-5">
            Varsity, the largest online stock market education book in the world
            covering everything from the basic to advance trading
          </p>
          <a href="#" style={{ textDecoration: "none" }}>
            Trading Q&A<i className="fa-solid fa-arrow-right-long mx-1"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
