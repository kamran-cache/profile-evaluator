const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const mongoose = require("mongoose");

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

// router
const profileRouter = require("./router/profileRouter");
const basicInfoRouter = require("./router/basicInfoRouter");
const experienceRouter = require("./router/experienceRouter");

app.use("/api/v1/profile", profileRouter);
app.use("/api/v1/basicInfo", basicInfoRouter);
app.use("/api/v1/experience", experienceRouter);

const Port = process.env.PORT || 8000;
app.listen(Port, () => {
  console.log(`server running on port ${Port}`);
});
