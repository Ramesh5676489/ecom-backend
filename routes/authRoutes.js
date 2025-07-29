const express = require("express");
const {
  register,
  login,
  logout,
  findOneAndUpdate,
  findOneAndDelete,
  verifyUser,
} = require("../controllers/authController");

const authRoutes = express.Router();

authRoutes.post("/register", register);
authRoutes.put("/update", findOneAndUpdate);
authRoutes.delete("/delete", findOneAndDelete);
authRoutes.post("/login", login);
authRoutes.post("/logout", logout);

authRoutes.get("/verify", verifyUser);

module.exports = authRoutes;
