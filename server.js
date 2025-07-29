const express = require("express");
const mongoose = require("mongoose");

const dotenv = require("dotenv");

const cors = require("cors");

const cookieparser = require("cookie-parser");

const authRoutes = require("./routes/authRoutes");
const cartRoutes = require("./routes/cartRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");

dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
app.use(express.json());

app.use(cookieparser());

app.get("/", (req, res) => {
  res.json({
    message: "server is running",
  });
});

app.use("/", productRoutes);

app.use("/", cartRoutes);

app.use("/auth", authRoutes);

app.use("/orders", orderRoutes);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Database connected");

    app.listen(3000, () => {
      console.log("server is runing in 3000");
    });
  })
  .catch(() => {
    console.log("Error connecting to database", error.message);
  });
