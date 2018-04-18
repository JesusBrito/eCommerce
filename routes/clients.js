'use strict'

var express = require('express');
var api=express.Router();
var ClientController = require('../controllers/client');
var md_auth = require('../middlewares/authenticated');

api.post('/login', ClientController.loginClient);
api.post('/register', ClientController.saveClient);
api.get('/clients',  md_auth.ensureAuth, ClientController.getClients);
api.get('/client/:rfc', md_auth.ensureAuth, ClientController.getClient);
api.put('/update-client/:rfc',  md_auth.ensureAuth, ClientController.updateClient);


module.exports= api;