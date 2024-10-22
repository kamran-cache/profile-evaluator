const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = process.env.DB.replace("<db_password>", process.env.password);
mongoose
  .connect(db)
  .then(() => {
    console.log("Database connected sucesfully!!");
  })
  .catch((err) => {
    console.log("error connecting databse", err);
  });

const app = express();
app.use(express.json());
app.use(cors());
// router
const profileRouter = require("./router/profileRouter");
const basicInfoRouter = require("./router/basicInfoRouter");
const experienceRouter = require("./router/experienceRouter");
const userRouter = require("./router/userRouter");
const addRouter = require("./router/addDataRouter");
const updateRouter = require("./router/updateRouter");

app.use("/api/v1/user", userRouter);
app.use("/api/v1/profile", profileRouter);
app.use("/api/v1/basicInfo", basicInfoRouter);
app.use("/api/v1/add-data", addRouter);
app.use("/api/v1/update-data", updateRouter);

const Port = process.env.PORT || 8000;
app.listen(Port, () => {
  console.log(`server running on port ${Port}`);
});
