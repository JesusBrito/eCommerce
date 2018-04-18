'use strict'

var express = require('express');
var api=express.Router();
var SaleController = require('../controllers/sale');
var md_auth = require('../middlewares/authenticated');

api.get('/sale-client/:rfc', md_auth.ensureAuth, SaleController.getSaleClient);
api.get('/sale-no-venta/:noventa/:rfc', md_auth.ensureAuth, SaleController.getSaleNo);
api.post('/sale', md_auth.ensureAuth, SaleController.saveSale);
api.post('/sale-detail', md_auth.ensureAuth, SaleController.saveDetail);

api.put('/change-status/:id/:status', md_auth.ensureAuth, SaleController.changeSaleStatus);
api.put('/add-no-tracking',  md_auth.ensureAuth, SaleController.addSalesTracking);
api.post('/sale-admin', md_auth.ensureAuth, SaleController.getSaleReport);

module.exports= api;