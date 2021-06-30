const mongoose = require("mongoose");

const Product = mongoose.model("Product", {
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  fileName: {
    type: String,
    required: true,
  },
  mimeType: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  qualification: {
    type: Array,
    required: true,
  },
});

module.exports = Product;
