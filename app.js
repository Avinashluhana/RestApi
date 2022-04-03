const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
});

const products = new mongoose.model("product", productSchema);

app.post("api/v1/product/new", async (req, res) => {
  const productData = new products.create(req.body);

  res.statu(200).json({
    success: true,
    product,
  });
});

app.listen(4000, () => {
  console.log("server is running");
});
