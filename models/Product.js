const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: 10,
  },
  description: {
    type: String,
    requrired: true,
  },
  price: {
    type: Number,
    requrired: true,
  },
  category: {
    type: String,
    requrired: true,
  },
  image: {
    type: String,
    requrired: true,
  },
  rating: {
    rate: {
      type: Number,
      requrired: true,
      min: 0,
      max: 5,
    },
    count: {
      type: Number,
      requrired: true,
    },
  },
});
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
