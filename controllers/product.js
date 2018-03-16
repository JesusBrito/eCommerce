var dao= require('../dao')

function getProducts(req,res) {

	sql="SELECT * FROM prueba";
	dao.open(sql,[],false,res);
}

function getProduct(req,res) {
	var condicion = req.params.id;
	sql="SELECT * FROM prueba WHERE telefono = :condicion";
	dao.open(sql,[condicion],false,res);
}

function saveProduct(req,res){
	var params= req.body;
	sql= "INSERT INTO prueba(nombre,telefono) VALUES(:nombre,:telefono)";
	var nombre=params.nombre;
	var telefono=params.telefono;
	dao.open(sql,[nombre,telefono],true,res);
}

function updateProduct(req,res){
	var params= req.body;
	sql= "UPDATE prueba SET nombre = :nombre, telefono = :telefono"+
					" WHERE telefono = :condicion";
	var nombre=params.nombre;
	var telefono=params.telefono;
	var condicion=params.condicion;
	dao.open(sql,[nombre,telefono,condicion],true,res);
}

function deleteProduct(req,res){
	var params= req.body;
	sql= "DELETE FROM prueba WHERE telefono = :condicion";
	var condicion=params.condicion;
	dao.open(sql,[condicion],true,res);
}

module.exports={
	getProduct,
	saveProduct,
	updateProduct,
	deleteProduct,
	getProducts
}