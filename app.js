var express = require ('express');
var bodyParser = require('body-parser');
app = express();

//CONFIGURACIÓN DEL BODY-PARSER
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//RUTAS
var product_routes = require('./routes/products');
var client_routes = require('./routes/clients');
var category_routes = require('./routes/categories');
var sale_routes = require('./routes/sales');


//RUTAS BASE
app.use('/', product_routes);
app.use('/', client_routes);
app.use('/', category_routes);
app.use('/', sale_routes);

module.exports=app;