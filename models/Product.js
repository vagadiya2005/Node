// const mongoose = require('mongoose');

// const productSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     price: { type: Number, required: true },
//     category: { type: String, required: true },
//     description: { type: String, required: false }
// });

// const Product = mongoose.model('Product', productSchema);

// module.exports = Product;


const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    TechnicalName: { type: String, required: true },
    CASno: { type: String, required: true },
    ChemicalStructure: { type: String, required: true },
    Packing: { type: String, required: true },
    Tag: { type: String, required: true }
});

module.exports = mongoose.model("Product", productSchema);
