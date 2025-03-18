import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import authRouter from "./routes/authRoute.js";
import mailDataRouter from "./routes/mailDataModel.js"
import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5100;

app.use(cookieParser());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/mail", mailDataRouter);
app.get("/",(req,res)=>res.send("true"));

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server listening port no. ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
