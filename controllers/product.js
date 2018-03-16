var dao= require('../dao')

function getProducts(req,res) {

	sql="SELECT * FROM Productos";
	dao.open(sql,[],false,res);
}

function getProduct(req,res) {
	var condicion = req.params.id;
	sql="SELECT * FROM Productos WHERE Id_prod = :condicion";
	dao.open(sql,[condicion],false,res);
}

function saveProduct(req,res){
	var params= req.body;
	//INSERT INTO Productos VALUES('Bot1','Botiquin', 'Botiquin de tamaño mediano', 'Bot', 'asd', 120.5, 10, 'A', '2', 12, 15, 5);
	sql= "INSERT INTO Productos(Id_prod , Nombre, Descripcion, Id_categoria, Str_img, "+
							  " Precio, Stock, Activo, Id_color, Alto, Largo, Ancho) "+
					 " VALUES(:id, :nombre, :descripcion, :categoria, :img, :precio, "+ 
					 " :stock, :activo, :color, :alto, :largo, :ancho)";
	
	var id=params.id, nombre=params.nombre, descripcion=params.descripcion, 
		categoria=params.categoria, img='', precio=params.precio, stock=params.stock, 
		activo=params.activo, color=params.color, alto=params.alto, largo=params.largo,
		ancho=params.nombre;

	dao.open(sql,[id, nombre, descripcion, categoria, img, precio, stock, activo, color, 
		alto, largo, ancho],true,res);
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
	sql= "DELETE FROM Productos WHERE Id_prod = :condicion";
	var condicion=params.condicion;
	dao.open(sql,[condicion],true,res);
}

function changeStatusProduct(req,res){
	var params= req.body;
	sql= "UPDATE Productos SET activo = :status WHERE Id_prod = :condicion";
	var status=params.status;
	var condicion=params.condicion;
	dao.open(sql,[status,condicion],true,res);
}
module.exports={
	getProduct,
	saveProduct,
	updateProduct,
	deleteProduct,
	getProducts,
	changeStatusProduct
}