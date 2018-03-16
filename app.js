var express = require ('express');
var bodyParser = require('body-parser');
app = express();

//CONFIGURACIÓN DEL BODY-PARSER
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//RUTAS
var product_routes = require('./routes/products');


//RUTAS BASE
app.use('/', product_routes);

module.exports=app;