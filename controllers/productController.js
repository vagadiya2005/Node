const Product = require('../models/Product');  // Ensure this path matches your project structure

exports.addProduct = async (req, res) => {
    try {
        let newProduct = new Product({
            TechnicalName: req.body.TechnicalName,
            CASno: req.body.CASno,
            ChemicalStructure: req.body.ChemicalStructure,
            Packing: req.body.Packing,
            Tag: req.body.Tag
        });
        let result = await newProduct.save();
        console.log(result);
        res.status(201).send(result);
    } catch (error) {
        res.status(500).send({ message: "Failed to add product", error: error.message });
    }
};

exports.getProductsByCategory = async (req, res) => {
    try {
        // const { category } = req.params;
        let products = await Product.find();  // Changed to 'Tag' to match the schema
        if (products.length > 0) {
            res.send(products);
        } else {
            res.status(404).send({ result: "No data found" });
        }
    } catch (error) {
        res.status(500).send({ message: "Failed to fetch products", error: error.message });
    }
};
    
