var models = require('../models');
var Sequelize = require('sequelize');
var path= require('path');
var fs= require('fs');

function getCategories(req,res) {
	models.Category.findAll()
		.then(function(categories){
			res.status(200).send(categories)
		})
		.catch(function(error){
			res.status(500).send({message:"Error: "+ error})
		});
}



function getImageFile(req,res){
	var imageFile= req.params.imageFile;
	var path_file= './uploads/categories/'+imageFile;
	fs.exists(path_file, function(exists){
		if(exists){
			res.sendFile(path.resolve(path_file));
		}else{
			res.status(200).send({message: 'No existe la imagen...'});
		}
	});
}

module.exports={
	getCategories,
	getImageFile
}