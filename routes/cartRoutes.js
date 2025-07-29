const express = require("express");
const {
  getCart,
  updateQuantity,
  addToCart,
  removeFromCart,
  clearCart,
} = require("../controllers/cartControllers");
const { isAuth } = require("../middlewares/authMiddlewares");

const cartRoutes = express.Router();

cartRoutes.get("/cart", isAuth, getCart);

cartRoutes.post("/cart/add", isAuth, addToCart);

cartRoutes.put("/cart", isAuth, updateQuantity);

cartRoutes.delete("/cart/product", isAuth, removeFromCart);

cartRoutes.delete("/cart/", isAuth, clearCart);

module.exports = cartRoutes;
