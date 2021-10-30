const express = require('express');
const router = new express.Router();
const ProductCtrl = require("../controllers/productCtrl");

router.get('/getProducts', (req, res) => {
    ProductCtrl.getProducts(req, res);
});

router.get('/getSpecificProduct/:productId', (req, res) => {
    ProductCtrl.getSpecificProduct(req, res);
});

router.post("/createProduct", (req, res) => {
    ProductCtrl.createProduct(req, res);
});

router.patch("/updateProduct/:productId", (req, res) => {
    ProductCtrl.updateProduct(req, res);
});

router.delete("/deleteProduct/:productId", (req, res) => {
    ProductCtrl.deleteProduct(req, res);
});

module.exports= router;