const express = require('express');
const router = express.Router();
const { addProduct, getProductsByCategory } = require('../controllers/productController');

router.post('/add-product', addProduct);
router.get('/products', getProductsByCategory);

module.exports = router;
