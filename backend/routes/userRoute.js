import express from "express";
import User from "../models/User.js";
import passport from "passport";
const router = express.Router();

//!=======GET SPECIFIC-USER===========
router.get("/profile", async (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ message: "Not authenticated" });
  }
  res.json(req.user);
});

//!=======SIGN-UP USER=========
router.post("/newUser", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const newUser = new User({ email, username });
    const registeredUser = await User.register(newUser, password);

    // Create session after successfully sign up
    req.login(registeredUser, (err) => {
      if (err) {
        return res.status(500).json({
          message: "Login after sign up failed",
        });
      }

      return res.status(201).json({
        message: "Signup successfully",
        user: {
          id: registeredUser._id,
          username: registeredUser.username,
          email: registeredUser.email,
        },
      });
    });
  } catch (err) {
    if (err.name === "UserExistsError") {
      return res.status(400).json({
        message: "Username already exists",
      });
    }

    return res.status(500).json({
      message: "Internal error",
      error: err.message,
    });
  }
});

//!=========LOGIN USER=========
// passport.authenticate() is a middleware for user authentication;
router.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/login" }),
  async (req, res) => {
    try {
      return res.status(202).json({ message: "Welcome to Zerodha!" });
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Internal server error", error: err.message });
    }
  },
);

export default router;
