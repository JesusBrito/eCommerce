var express = require ('express');
var bodyParser = require('body-parser');
app = express();

//CONFIGURACIÓN DEL BODY-PARSER
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//RUTAS
var product_routes = require('./routes/products');
var client_routes = require('./routes/clients');


//RUTAS BASE
app.use('/', product_routes);
app.use('/', client_routes);

module.exports=app;