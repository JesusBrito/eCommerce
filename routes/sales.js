'use strict'

var express = require('express');
var api=express.Router();
var SaleController = require('../controllers/sale');


api.get('/sale-client/:rfc', SaleController.getSaleClient);
api.get('/sale-no-venta/:noventa', SaleController.getSaleNo);


api.put('/change-status/:id/:status', SaleController.changeSaleStatus);
api.put('/add-no-tracking', SaleController.addSalesTracking);
api.post('/sale-admin', SaleController.getSaleReport);

/*



api.post('/save-sale', SaleController.saveClient);

*/
module.exports= api;