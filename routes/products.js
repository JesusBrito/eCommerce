var express = require('express');
var api=express.Router();
var ProductController = require('../controllers/product');

api.post('/producto', ProductController.saveProduct);

module.exports= api;