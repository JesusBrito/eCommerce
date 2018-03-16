var app= require('./app');
var port = process.env.PORT||8080;


app.listen(port, ()=>{
	console.log('El servidor está escuchando en http://localhost:'+ port);
})
