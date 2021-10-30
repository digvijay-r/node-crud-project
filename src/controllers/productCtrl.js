
const Product = require("../models/productModel");
const productManagement = {};

productManagement.createProduct = async (req, res) => {
    try {
        const product = new Product({
            name: req.body.name,
            price: req.body.price,
            quantity: req.body.quantity,
        })
        const newProduct = await product.save();
        res.status(200).json({ status: true, data: newProduct });
    } catch (err) {
        res.status(500).json({error: err});
    }
};

productManagement.getProducts = async (req, res) => {
    try {
        const product = await Product.find();
        if(product.length > 0) {
            res.status(200).json({ status: true, data: product });
        }else{
            res.status(404).json({ status: false, message: "No products found" });
        }
    } catch (err) {
        res.status(500).json({error: err});
    }
};

productManagement.getSpecificProduct = async (req, res) => {
    try {
        const id = req.params.productId;
        // mongoose findById
        // const product = await Product.findById(id);
        // mongoose findOne
        const product = await Product.findOne({_id: id});
        if(product) {
            res.status(200).json({ status: true, data: product });
        }else{
            res.status(404).json({ status: false, message: "No product found" });
        }
    } catch (err) {
        res.status(500).json({ error: err });
    }
}

productManagement.updateProduct = async (req, res) => {
    try {
        const id = req.params.productId;
        const updateData = req.body;
        const product = await Product.updateOne({_id: id}, updateData);
        res.status(200).json({ status: true, data: "Updated successfully" });
    } catch (err) {
        res.status(500).json({ error: err });
    }
};


productManagement.deleteProduct = async (req, res) => {
    try {
        const id = req.params.productId;
        const removed = await Product.remove({_id: id});
        res.status(200).json({ status: true, data: "Removed successfully" });
    } catch(err) {
        res.status(500).json({ error: err });
    }
};

module.exports = productManagement;