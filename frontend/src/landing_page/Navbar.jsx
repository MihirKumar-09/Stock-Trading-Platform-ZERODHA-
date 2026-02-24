export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container p-2">
        <a className="navbar-brand" href="#">
          <img
            src="media/images/logo.svg"
            alt="Zerodha-logo"
            style={{ width: "25%" }}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex" role="search">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Signup
                </a>
              </li>
              <li className="nav-item" style={{ marginLeft: "40px" }}>
                <a className="nav-link active">About</a>
              </li>
              <li className="nav-item" style={{ marginLeft: "40px" }}>
                <a className="nav-link active">Products</a>
              </li>
              <li className="nav-item" style={{ marginLeft: "40px" }}>
                <a className="nav-link active">Pricing</a>
              </li>
              <li className="nav-item" style={{ marginLeft: "40px" }}>
                <a className="nav-link active">Support</a>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}
