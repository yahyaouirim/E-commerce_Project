
const Product = require('../models/productModel');

module.exports = {
    displayAllProduct: async (req, res) => {
        try {
            let products = await Product.find({});
            console.log("All Products");
            res.json(products);
        } catch (error) {
            console.error("Error fetching all products:", error);
            res.status(500).json({ success: false, error: "Internal server error" });
        }
    },

    addProduct: async (req, res) => {
        try {
            let products = await Product.find({});
            let id = products.length > 0 ? products[products.length - 1].id + 1 : 1;
            const product = new Product({
                id: id,
                name: req.body.name,
                image: req.body.image,
                category: req.body.category,
                new_price: req.body.new_price,
                old_price: req.body.old_price,
                description: req.body.description,
            });
            console.log("New Product:", product);
            await product.save();
            console.log("Product Saved");
            res.json({ success: true, name: req.body.name });
        } catch (error) {
            console.error("Error adding product:", error);
            res.status(500).json({ success: false, error: "Internal server error" });
        }
    },

    deleteProduct: async (req, res) => {
        try {
            let product = await Product.findOneAndDelete({ id: req.body.id });
            console.log("Product deleted:", product);
            res.json({ success: true, name: product.name });
        } catch (error) {
            console.error("Error deleting product:", error);
            res.status(500).json({ success: false, error: "Internal server error" });
        }
    },

    displayNewCollections: async (req, res) => {
        try {
            let products = await Product.find({});
            let newCollection = products.slice(-8);
            console.log("New Collection:", newCollection);
            res.json(newCollection);
        } catch (error) {
            console.error("Error fetching new collection:", error);
            res.status(500).json({ success: false, error: "Internal server error" });
        }
    },

    popularInWomen: async (req, res) => {
        try {
            let products = await Product.find({ category: "women" }).limit(4);
            console.log("Popular in Women:", products);
            res.json(products);
        } catch (error) {
            console.error("Error fetching popular products in women category:", error);
            res.status(500).json({ success: false, error: "Internal server error" });
        }
    },
    popularInMen: async (req, res) => {
        try {
            let products = await Product.find({ category: "men" }).limit(4);
            console.log("Popular in Men:", products);
            res.json(products);
        } catch (error) {
            console.error("Error fetching popular products in men category:", error);
            res.status(500).json({ success: false, error: "Internal server error" });
        }
    },
    popularInKids: async (req, res) => {
        try {
            let products = await Product.find({ category: "kid" }).limit(4);
            console.log("Popular in Kids:", products);
            res.json(products);
        } catch (error) {
            console.error("Error fetching popular products in kids category:", error);
            res.status(500).json({ success: false, error: "Internal server error" });
        }
    },

    updateProduct: async (req, res) => {
        try {
            const { id, name, image, category, new_price, old_price, description } = req.body;
            const updatedProduct = await Product.findOneAndUpdate(
                { id: id },
                {
                    $set: {
                        name: name,
                        image: image,
                        category: category,
                        new_price: new_price,
                        old_price: old_price,
                        description: description
                    }
                },
                { new: true }
            );

            if (updatedProduct) {
                console.log("Product updated:", updatedProduct);
                res.json({ success: true, product: updatedProduct});
            } else {
                console.error("Product not found");
                res.status(404).json({ success: false, error: "Product not found" });
            }
        } catch (error) {
            console.error("Error updating product:", error);
            res.status(500).json({ success: false, error: "Internal server error" });
        }

    },

    getOneProduct: async (req, res) => {
        try {
            const product = await Product.findOne({ id: req.params.id });
            if (product) {
                console.log("Product found:", product);
                res.json(product);
            } else {
                console.error("Product not found");
                res.status(404).json({ success: false, error: "Product not found" });
            }
        } catch (error) {
            console.error("Error fetching product:", error);
            res.status(500).json({ success: false, error: "Internal server error" });
        }
    }
};
