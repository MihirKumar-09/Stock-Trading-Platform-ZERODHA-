import express from "express";
import User from "../models/User.js";
import passport from "passport";
const router = express.Router();

//!=======GET SPECIFIC-USER===========
// router.get("/me", async (req, res) => {
//   try {
//     if (!req.user) {
//       return res.status(401).json({ message: "Not authenticated" });
//     }
//     console.log(req.user.username);
//     return res.json({
//       id: req.user._id,
//       username: req.user.username,
//       email: req.user.email,
//     });
//   } catch (err) {
//     return res
//       .status(500)
//       .json({ message: "Internal server error", error: err.message });
//   }
// });

//!=======SIGN-UP USER=========
router.post("/newUser", async (req, res) => {
  const { username, email, password } = req.body;
  console.log(req.body);
  try {
    const newUser = new User({ email, username });
    const registeredUser = await User.register(newUser, password);
    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: registeredUser._id,
        username: registeredUser.username,
        email: registeredUser.email,
      },
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
