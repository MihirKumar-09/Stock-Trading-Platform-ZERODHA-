import { Link } from "react-router-dom";
import { useState } from "react";
export default function Navbar() {
  const [selectedMenu, setSelectedMenu] = useState(0);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };
  const menuClass = "menu";
  const activeMenuClass = "menu selected";
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container p-2">
        <Link
          className="navbar-brand"
          to="/"
          onClick={() => handleMenuClick(0)}
        >
          <img
            src="media/images/logo.svg"
            alt="Zerodha-logo"
            style={{ width: "25%" }}
          />
        </Link>
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
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/signup"
                  onClick={() => handleMenuClick(1)}
                >
                  <p
                    className={selectedMenu === 1 ? activeMenuClass : menuClass}
                  >
                    Signup
                  </p>
                </Link>
              </li>
              <li className="nav-item" style={{ marginLeft: "40px" }}>
                <Link
                  className="nav-link active"
                  to="/about"
                  onClick={() => handleMenuClick(2)}
                >
                  <p
                    className={selectedMenu === 2 ? activeMenuClass : menuClass}
                  >
                    About
                  </p>
                </Link>
              </li>
              <li className="nav-item" style={{ marginLeft: "40px" }}>
                <Link
                  className="nav-link active"
                  to="/product"
                  onClick={() => handleMenuClick(3)}
                >
                  <p
                    className={selectedMenu === 3 ? activeMenuClass : menuClass}
                  >
                    Products
                  </p>
                </Link>
              </li>
              <li className="nav-item" style={{ marginLeft: "40px" }}>
                <Link
                  className="nav-link active"
                  to="/pricing"
                  onClick={() => handleMenuClick(4)}
                >
                  <p
                    className={selectedMenu === 4 ? activeMenuClass : menuClass}
                  >
                    Pricing
                  </p>
                </Link>
              </li>
              <li className="nav-item" style={{ marginLeft: "40px" }}>
                <Link
                  className="nav-link active"
                  to="/support"
                  onClick={() => handleMenuClick(5)}
                >
                  <p
                    className={selectedMenu === 5 ? activeMenuClass : menuClass}
                  >
                    Support
                  </p>
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}
