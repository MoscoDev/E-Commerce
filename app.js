const express = require("express");
const app = express();
const dotenv = require("dotenv");
const fs = require("fs");
const morgan = require("morgan");
const path = require("path");
dotenv.config({ path: "./config.env" });
const UserRouter = require("./src/routes/userRoute");
const productRouter = require("./src/routes/productRoute");
const cartRouter = require("./src/routes/cartRoute");
const orderRouter = require("./src/routes/orderRoute");
const authRoutes = require("./src/routes/auth-route");
const cookieParser = require("cookie-parser");

app.use(express.json());

app.use(cookieParser());

var accessLogStream = fs.createWriteStream(
  path.join("./src/utils", "access.log"),
  {
    flags: "a",
  }
);

app.use(morgan("dev", { stream: accessLogStream }));

app.use("/api/v1/auths", authRoutes);
app.use("/api/v1/users", UserRouter);
app.use("/api/v1/products", productRouter);
app.use("/api/v1/carts", cartRouter);
app.use("/api/v1/orders", orderRouter);

module.exports = app;
