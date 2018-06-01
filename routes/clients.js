'use strict'

var express = require('express');
var api=express.Router();
var ClientController = require('../controllers/client');
var md_auth = require('../middlewares/authenticated');

api.post('/login', ClientController.loginClient);
api.post('/register', ClientController.saveClient);
api.post('/reset-password', ClientController.sendEmail);
api.get('/client/',  md_auth.ensureAuth, ClientController.getClients);
api.get('/client/:condicion', md_auth.ensureAuth, ClientController.getClient);
api.get('/client-validation/:condicion', ClientController.getClientValidation);
api.put('/update-client/:rfc',  md_auth.ensureAuth, ClientController.updateClient);


module.exports= api;