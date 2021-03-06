var models = require('../models')
var Sequelize = require('sequelize');
var Config=require('../config/config');
const Op = Sequelize.Op;
var path= require('path');
var fs= require('fs');

function saveProduct(req,res){
	var params= req.body;
	var product = models.Product.build(params)
	product.save()
		.then(function(product){
			res.status(200).send(product)
		})
    	.catch(Sequelize.ValidationError, function(error) {
			 console.log("Errores de validación:", error);
			 for (var i in error.errors) {
			 console.log('Error en el campo:', error.errors[i].value);
			 };
			 res.status(500).send({error});
		})
		.catch(function(error) {
			res.status(500).send({message:"Error: "+error});
		});
}


function getProducts(req,res) {
	models.Product.findAll({include:[models.Category]})
		.then(function(products){
			res.status(200).send(products)
		})
		.catch(function(error){
			res.status(500).send({message:"Error: "+ error})
		});
}

function getProductsClient(req,res) {
	models.Product.findAll({include:[models.Category],where:{Estatus:'A'}})
		.then(function(products){
			res.status(200).send(products)
		})
		.catch(function(error){
			res.status(500).send({message:"Error: "+ error})
		});
}


function getProduct(req,res) {
	var idArticulo = req.params.id;
	var conditionalData = {
	    	Id_prod: {
	        	$like: idArticulo+'%'
	    	}
		}
	models.Product.findAll({include:[models.Category],where:conditionalData})
		.then(function(product){
			if(product){
				res.status(200).send(product)
			}else{
				res.status(404).send({message:"No existe el producto"})
			}
		})
		.catch(function(error){
			res.status(500).send({message:"Error: "+ error})
		});
}




function getProductByName(req,res) {
	var nombre = req.params.nombre;
	var conditionalData = {
	    	Nombre: {
	        	$like: '%'+nombre+'%'
	    	}
		}
	models.Product.findAll({include:[models.Category],where: conditionalData})
		.then(function(product){
			if(product){
				res.status(200).send(product)
			}else{
				res.status(404).send({message:"No existe el producto"})
			}
		})
		.catch(function(error){
			res.status(500).send({message:"Error: "+ error})
		});
}

function getProductById(req,res) {
	var idArticulo = req.params.id;
	models.Product.findOne({include:[models.Category],where:{Id_Prod:idArticulo}})
		.then(function(product){
			if(product){
				res.status(200).send()
			}else{
				res.status(404).send({message:"No existe el producto"})
			}
		})
		.catch(function(error){
			res.status(500).send({message:"Error: "+ error})
		});
}

function deleteProduct(req,res){
	var params= req.body;
	var condicion=params.Id_prod;
	models.Product.destroy({where:{Id_prod:condicion}})
		.then(function(){
				res.status(200).send({message:"Se eliminó el producto"})
		})
		.catch(function(error){
			res.status(500).send({message: "Error: "+error})
		})
}


function updateProduct(req,res){
	var params= req.body;
	var condicion=params.Id_prod;
	models.Product.update(params, {where:{Id_prod:condicion}})
	.then(function(){
		models.Product.findOne({where:{Id_prod:condicion}})
			.then(function(product){
				if(product){
					res.status(200).send(product)
				}else{
					res.status(404).send({message:"No existe el producto"})
				}
			})
		})
		.catch(function(error){
			res.status(500).send({message:"Error: "+ error})
		})
}


function changeStatusProduct(req,res){
	var params= req.params;
	var status=params.status;
	var condicion=params.id;
	models.Product.update( {Estatus: status}, {where: {Id_prod:condicion}})
		.then(function(){
			models.Product.findOne({where:{Id_prod:condicion}})
				.then(function(product){
					if(product){
						res.status(200).send(product)
					}else{
						res.status(404).send({message:"No existe el producto"})
					}
				})
		})
		.catch(function(error){
			res.status(500).send({message:"Error: "+ error})
		})
}

function addStock(req,res){
	var params= req.body;
	var stockR=params.stock;
	var condicion=params.Id_prod;
	var sequelize = new Sequelize(
		Config.db.database,
		Config.db.user,
		Config.db.password,
		Config.db.options
	)
	sequelize
  		.query(' CALL SP_UPDATE_STOCK(:id,:stock)',
        	{replacements: { id: condicion, stock: stockR}})
  		.then(()=>{
  			res.status(200).send({message: "Se ha actualizado el stock"})
  		})
  		.catch((error)=>{
  			res.status(500).send({error})
  		})
}

function uploadImage(req, res) {
	var condicion = req.params.id;
	var file_name = 'No subido...';

	if (req.files){
		var file_path = req.files.Str_img.path;
		var file_split = file_path.split('/');
		var file_name = file_split[2];

		var ext_split = file_name.split('.');
		var file_ext = ext_split[1];

		if (file_ext=='png'||file_ext=='jpg'|| file_ext=='gif'){

			models.Product.update( {Str_img: file_name}, {where: {Id_prod:condicion}})
				.then(function(){
					models.Product.findOne({where:{Id_prod:condicion}})
						.then(function(product){
							if(product){
								res.status(200).send(product)
							}else{
								res.status(404).send({message:"No existe el producto"})
							}
						})
				})
				.catch(function(error){
					res.status(500).send({message:"Error: "+ error})
				})
		}
	}
}

function getImageFile(req,res){
	var imageFile= req.params.imageFile;
	var path_file= './uploads/products/'+imageFile;
	fs.exists(path_file, function(exists){
		if(exists){
			res.sendFile(path.resolve(path_file));
		}else{
			res.status(200).send({message: 'No existe la imagen...'});
		}
	});
}

function ProductsXCategory(req,res) {
	var idCategoria = req.params.id;
	var nombreProducto = req.params.name;
	if(nombreProducto){
		var conditionalData = {
	    	Nombre: {
	        	$like: '%'+nombreProducto+'%'
	    	}
		}
		models.Product.findAll({where:{$and:[conditionalData,{CategoriaIdCategoria:idCategoria}]}})
		.then(function(products){
			if(products){
				res.status(200).send(products)
			}else{
				res.status(404).send({message:"No existen productos asociados a la categoría"})
			}
		})
		.catch(function(error){
			res.status(500).send({message:"Error: "+ error})
		});
	}else{
		models.Product.findAll({where:{CategoriaIdCategoria:idCategoria}})
		.then(function(products){
			if(products){
				res.status(200).send(products)
			}else{
				res.status(404).send({message:"No existen productos asociados a la categoría"})
			}
		})
		.catch(function(error){
			res.status(500).send({message:"Error: "+ error})
		});
	}
}

module.exports={
	getProduct,
	saveProduct,
	updateProduct,
	deleteProduct,
	getProducts,
	changeStatusProduct,
	addStock,
	uploadImage,
	getImageFile,
	getProductsClient,
	getProductByName,
	getProductById,
	ProductsXCategory
}
