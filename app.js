const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
mongoose
  .connect("mongodb://localhost:27017")
  .then(() => {
    console.log("connected with mongodb");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
});

const products = new mongoose.model("product", productSchema);

app.post("/api/v1/product/new", async (req, res) => {
  const productData = await products.create(req.body);

  res.status(200).json({
    success: true,
    productData,
  });
});

// getting data

app.get("/api/v1/products", async (req, res) => {
  const getProducts = await products.find();
  res.status(200).json({
    status: 200,
    getProducts,
  });
});

app.listen(4000, () => {
  console.log("server is running");
});
