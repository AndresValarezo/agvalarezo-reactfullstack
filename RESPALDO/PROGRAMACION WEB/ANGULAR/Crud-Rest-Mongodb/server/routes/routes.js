const  express = require('express');
const productController = require('../controller/products-controller.js');

const router= express.Router();
//Post methods
router.post('/newProduct', productController.addProduct);

//Get methods
router.get('/allProducts', productController.getAllProducts);
router.get('/product/:id', productController.getProduct);

//Put methods
router.put('/product/:id', productController.editProductId);

//Delete methods
router.delete('/product/:id', productController.deleteProduct);


module.exports = router;