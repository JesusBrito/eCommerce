'use strict'

var express = require('express');
var api=express.Router();
var ProductController = require('../controllers/product');
var multipart= require('connect-multiparty');
var md_upload= multipart({uploadDir: './uploads/products'});
var md_auth = require('../middlewares/authenticated');

api.get('/producto',  ProductController.getProducts);
api.get('/producto/:id',  ProductController.getProduct);
api.get('/producto-validacion/:id',  ProductController.getProductById);
api.get('/producto-client/:nombre',  ProductController.getProductByName);
api.get('/producto-client', ProductController.getProductsClient)
api.post('/producto',    ProductController.saveProduct);
api.put('/producto',  md_auth.ensureAuth, ProductController.updateProduct);
api.put('/producto-add-stock',  md_auth.ensureAuth, ProductController.addStock);
api.put('/producto/:id/:status',  md_auth.ensureAuth, ProductController.changeStatusProduct);
api.delete('/producto',  md_auth.ensureAuth, ProductController.deleteProduct);
api.get('/productos-categoria/:id/:name?', ProductController.ProductsXCategory);
api.put('/upload-image-product/:id', [md_auth.ensureAuth, md_upload], ProductController.uploadImage);
api.get('/get-image-product/:imageFile', ProductController.getImageFile);
module.exports= api;
