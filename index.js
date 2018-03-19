var app= require('./app');
var Config=require('./config/config')
var port = Config.port;


app.listen(port, ()=>{
	console.log('El servidor está escuchando en http://localhost:'+ port);
})
