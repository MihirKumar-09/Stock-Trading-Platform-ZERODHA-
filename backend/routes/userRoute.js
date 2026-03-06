import express from "express";
import User from "../models/User.js";
const router = express.Router();

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

export default router;
