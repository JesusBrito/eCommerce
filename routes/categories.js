'use strict'

var express = require('express');
var api=express.Router();
var CategoryController = require('../controllers/category');


api.get('/category', CategoryController.getCategories);
api.get('/category-products/:id', CategoryController.getCategoriesProducts);

module.exports= api;