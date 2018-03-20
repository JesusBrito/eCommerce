var models = require('../models');
var Sequelize = require('sequelize-oracle');

function getCategories(req,res) {
	models.Category.findAll()
		.then(function(categories){
			res.status(200).send(categories)
		})
		.catch(function(error){
			res.status(500).send({message:"Error: "+ error})
		});
}

function getCategoriesProducts(req,res) {
	var condicion = req.params.id;
	models.Category.findOne({include:[models.Product],where:{Id_Categoria:condicion}})
		.then(function(category){
			if(category){
				res.status(200).send(category)
			}else{
				res.status(404).send({message:"No existen productos asociados a la categoría"})
			}
		})
		.catch(function(error){
			res.status(500).send({message:"Error: "+ error})
		}); 
}

module.exports={
	getCategories,
	getCategoriesProducts
}