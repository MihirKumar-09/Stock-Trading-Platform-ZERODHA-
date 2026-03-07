import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import bodyParser from "body-parser";
import passport from "passport";
import LocalStrategy from "passport-local";
import User from "./models/User.js";
import session from "express-session";

const app = express();

const PORT = 3002;
const uri = process.env.MONGODB_URI;

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:3000"],
    credentials: true,
  }),
);

//!======SESSION SET-UP=========
const sessionOptions = {
  secret: "superSecret",
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};
app.use(session(sessionOptions));

//!======PASSPORT CONFIGURE========
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//!=======IMPORT ALL ROUTES=========
import HoldingRoute from "./routes/holdingRoute.js";
import PositionRoute from "./routes/positionRoute.js";
import OrderRoute from "./routes/orderRoute.js";
import WatchList from "./routes/watchListRoute.js";
import UserRoute from "./routes/userRoute.js";

//!===========REGISTER WITH SERVER=========
app.use("/holdings", HoldingRoute);
app.use("/position", PositionRoute);
app.use("/order", OrderRoute);
app.use("/watchList", WatchList);
app.use("/user", UserRoute);

//!============START SERVER & CALL THE FUNCTION===========
app.listen(PORT, () => {
  console.log("Server run on ", PORT);
  connectDB();
});

//!============CONNECT WITH MONGO-DB=============
const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Connect with mongoDB");
  } catch (err) {
    console.log("Failed to connect");
  }
};
