import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./routes/user";
import logger from "morgan";

dotenv.config();
const app = express();

mongoose
  .connect(process.env.MONGO_URL!)
  .then(() => console.log("DBConnection Successfull"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(logger("dev"));
app.use("/todo", userRoute);

const PORT = 5500;

app.listen(process.env.PORT || 5500, () => {
  console.log(`Backend server is running on port: ${PORT}`);
});
