const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("../app.js");

app.use(express.json());

mongoose.connect(process.env.DB_URL);
mongoose.connection.once("open", () => {
  console.log("conneted to database");
});

app.listen(process.env.DB_PORT, () => {
  console.log("Hello from port " + process.env.DB_PORT);
});
