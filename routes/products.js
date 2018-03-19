'use strict'

var express = require('express');
var api=express.Router();
var ProductController = require('../controllers/product');
var multipart= require('connect-multiparty');
var md_upload= multipart({uploadDir: './uploads/products'});

api.get('/producto', ProductController.getProducts);
api.get('/producto/:id', ProductController.getProduct);
api.post('/producto', ProductController.saveProduct);
api.put('/producto', ProductController.updateProduct);
api.put('/producto-add-stock', ProductController.addStock);
api.put('/producto/:id/:status', ProductController.changeStatusProduct);
api.delete('/producto', ProductController.deleteProduct);

api.post('/upload-image-product/:id',md_upload, ProductController.uploadImage);
api.get('/get-image-product/:imageFile', ProductController.getImageFile);
module.exports= api;