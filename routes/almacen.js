'use strict'

var express = require('express');
var api=express.Router();
var AlmacenController = require('../controllers/almacen');
var multipart= require('connect-multiparty');
var md_upload= multipart({uploadDir: './uploads/products'});
var md_auth = require('../middlewares/authenticated');



api.put('/producto-add-stock',  md_auth.ensureAuth, AlmacenController.addStock)
api.post('/almacen', md_auth.ensureAuth, AlmacenController.addAlmacen)
api.get('/almacen-color/:idColor/:idProd', AlmacenController.getAlmacenXColor)
//api.get('/almacen', AlmacenController.getAlmacen)
api.put('/almacen-update-price/:Id_Alm',  md_auth.ensureAuth, AlmacenController.updatePrice)
api.get('/almacenes-producto/:idProd',   AlmacenController.productosxAlmacen)
api.get('/validar-almacen/:idProd/:idColor', md_auth.ensureAuth, AlmacenController.validarAlmacen)
module.exports= api;

