import cookies from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";

import user from "./routes/user.js";

const app = express();

app.use(cookies());

// check if the app is running production mode

if (process.env.NODE_ENV !== "production") {
  dotenv.config({ path: "./config/config.env" });
}

//middlewarwe
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes to hit api's

app.use("/api/v1", user);

export default app;
