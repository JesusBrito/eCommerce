var express = require ('express');
var bodyParser = require('body-parser');
app = express();

//CONFIGURACIÓN DEL BODY-PARSER
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//CABECERAS 
app.use((req,res,next)=>{
	res.header('Access-Control-Allow-Origin','*');
	res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Controll-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow','GET, POST, OPTIONS, PUT, DELETE');

	next();
});

//RUTAS
var product_routes = require('./routes/products');
var client_routes = require('./routes/clients');
var category_routes = require('./routes/categories');
var sale_routes = require('./routes/sales');
var color_routes = require('./routes/color');



//RUTAS BASE
app.use('/', product_routes);
app.use('/', client_routes);
app.use('/', category_routes);
app.use('/', sale_routes);
app.use('/', color_routes);

module.exports=app;