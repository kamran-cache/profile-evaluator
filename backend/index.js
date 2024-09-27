const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const Db = process.env.DB.replace("PASSWORD", process.env.PASSWORD);
mongoose
  .connect(Db)
  .then(() => {
    console.log("Database Conneected successfully!!");
  })
  .catch((err) => {
    console.log("Error connecting Database", err);
  });
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
