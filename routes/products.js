var express = require('express');
var api=express.Router();
var ProductController = require('../controllers/product');

api.get('/producto', ProductController.getProducts);
api.get('/producto/:id', ProductController.getProduct);
api.post('/producto', ProductController.saveProduct);
api.put('/producto', ProductController.updateProduct);
api.delete('/producto', ProductController.deleteProduct);

module.exports= api;