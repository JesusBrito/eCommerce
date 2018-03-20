'use strict'

var express = require('express');
var api=express.Router();
var ClientController = require('../controllers/client');
var multipart= require('connect-multiparty');
var md_upload= multipart({uploadDir: './uploads/clients'});


api.get('/client', ClientController.getClients);
api.get('/client/:rfc', ClientController.getClient);
api.post('/register', ClientController.saveClient);
api.put('/update-user', ClientController.updateClient);

module.exports= api;