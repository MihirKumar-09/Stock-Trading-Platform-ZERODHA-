import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default page refresh

    const newErrors = {};

    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error("Please fill all fields");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:3002/user/newUser",
        formData,
        { withCredentials: true },
      );

      window.location.href = "http://localhost:3000"; //! Navigate to Dashboard home page
      toast.success("Account created successfully");
      setFormData({
        username: "",
        email: "",
        password: "",
      });
    } catch (err) {
      const backendError = err.response?.data?.message;

      toast.error(backendError || "Signup failed");

      if (backendError?.toLowerCase().includes("username")) {
        setErrors({ username: backendError });
      }

      if (backendError?.toLowerCase().includes("email")) {
        setErrors({ email: backendError });
      }
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
          <h2 className="text-center mb-4">Sign Up</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Username</label>

              <input
                type="text"
                name="username"
                className={`form-control ${errors.username && "is-invalid"}`}
                placeholder="Enter Username"
                value={formData.username}
                onChange={handleChange}
              />

              <div className="invalid-feedback">{errors.username}</div>
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>

              <input
                type="email"
                name="email"
                className={`form-control ${errors.email && "is-invalid"}`}
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
              />

              <div className="invalid-feedback">{errors.email}</div>
            </div>

            {/* Password */}

            <div className="mb-3">
              <label className="form-label">Password</label>

              <input
                type="password"
                name="password"
                className={`form-control ${errors.password && "is-invalid"}`}
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
              />

              <div className="invalid-feedback">{errors.password}</div>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Create Account
            </button>
            <Link to="/login" className="text-decoration-none">
              <p className="text-center mt-3">Login</p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
