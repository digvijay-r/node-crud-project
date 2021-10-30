const express = require("express");
const mongoose = require("mongoose");
const app = express();
const productRoutes = require("./src/routes/product");
const port = process.env.PORT || 3000;

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/test");

app.use(productRoutes);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

