'use strict'

var express = require('express');
var api=express.Router();
var AlmacenController = require('../controllers/almacen');
var multipart= require('connect-multiparty');
var md_upload= multipart({uploadDir: './uploads/products'});
var md_auth = require('../middlewares/authenticated');



api.put('/producto-add-stock',  md_auth.ensureAuth, AlmacenController.addStock);
api.get('/almacen-color/:idColor/:idProd', AlmacenController.getAlmacenXColor);
api.get('/almacen', AlmacenController.getAlmacen);
module.exports= api;
