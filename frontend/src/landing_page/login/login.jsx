import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
    general: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });

    // clear specific field error when typing
    setErrors({
      ...errors,
      [e.target.name]: "",
      general: "",
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const newErrors = {
      username: "",
      password: "",
      general: "",
    };

    if (!user.username) {
      newErrors.username = "Username is required";
    }

    if (!user.password) {
      newErrors.password = "Password is required";
    }

    if (newErrors.username || newErrors.password) {
      setErrors(newErrors);
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:3002/user/login",
        {
          username: user.username,
          password: user.password,
        },
        { withCredentials: true },
      );

      // Redirect to dashboard (change port if needed)
      window.location.href = "http://localhost:3000";
    } catch (err) {
      const backendError =
        err.response?.data?.message || "username & password not match";

      setErrors({
        username: "",
        password: "",
        general: backendError,
      });
    }
  };

  return (
    <div className="container">
      <div className="row">
        <h2 className="text-center fs-3 mt-5 mb-4">
          Open a free demat and trading account online
        </h2>

        <p className="text-center text-muted mb-5" style={{ fontSize: "22px" }}>
          Start investing brokerage free and join a community of investors
        </p>

        <div className="col-8 text-center mt-5">
          <img
            src="media/images/account_open.svg"
            alt="account"
            style={{ width: "60%" }}
          />
        </div>

        <div
          className="col-4"
          style={{
            margin: "50px auto",
            padding: "30px",
            border: "1px solid #e0e0e0",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
            backgroundColor: "#fff",
          }}
        >
          <h2 className="text-center mb-4">Log In</h2>

          {errors.general && (
            <div className="alert alert-danger text-center">
              {errors.general}
            </div>
          )}

          <form onSubmit={handleLogin}>
            {/* Username */}
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                type="text"
                name="username"
                className={`form-control ${
                  errors.username ? "is-invalid" : ""
                }`}
                placeholder="Enter Username"
                value={user.username}
                onChange={handleChange}
              />
              {errors.username && (
                <div className="invalid-feedback">{errors.username}</div>
              )}
            </div>

            {/* Password */}
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                }`}
                placeholder="Enter Password"
                value={user.password}
                onChange={handleChange}
              />
              {errors.password && (
                <div className="invalid-feedback">{errors.password}</div>
              )}
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Log In
            </button>

            <Link to="/signup" className="text-decoration-none">
              <p className="text-center mt-3">SignUp</p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
