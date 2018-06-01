'use strict'

var express = require('express');
var api=express.Router();
var SaleController = require('../controllers/sale');
var md_auth = require('../middlewares/authenticated');

api.get('/sale-client/:rfc', md_auth.ensureAuth, SaleController.getSaleClient);
api.get('/sale-no-venta/:rfc/:noventa', md_auth.ensureAuth, SaleController.getSaleNoClient);
api.post('/sale', md_auth.ensureAuth, SaleController.saveSale);
api.post('/sale-detail', md_auth.ensureAuth, SaleController.saveDetail);

api.put('/update-sale', md_auth.ensureAuth, SaleController.updateSale);
api.post('/sale-admin', md_auth.ensureAuth, SaleController.getSaleReport);
api.get('/sale-no-venta/:noventa', md_auth.ensureAuth, SaleController.getSaleNo);

module.exports= api;