'use strict'

var express = require('express');
var api=express.Router();
var ColorController = require('../controllers/color');

api.get('/color',  ColorController.getColors);

module.exports= api;