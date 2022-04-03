const express = require("express");
const mongoose = require("mongoose");

const app = express();

const productSchema = new mongoose.Schema({
    name:String,
    description:String,
    price:Number,

})


const products = new mongoose.model("product", productSchema);


app.post()



app.listen(4000,()=>{
    console.log("server is running");
})


