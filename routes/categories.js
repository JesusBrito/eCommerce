'use strict'

var express = require('express');
var api=express.Router();
var CategoryController = require('../controllers/category');
var multipart= require('connect-multiparty');
var md_upload= multipart({uploadDir: './uploads/products'});
var md_auth = require('../middlewares/authenticated');


api.get('/categoria', CategoryController.getCategories);
api.get('/categoria-productos/:id', CategoryController.getCategoriesProducts);

//api.post('/upload-image-category/:id', [md_auth.checkJwt, md_upload], ProductController.uploadImage);
api.get('/get-image-category/:imageFile', CategoryController.getImageFile);
module.exports= api;