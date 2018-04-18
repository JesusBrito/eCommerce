var Config=require('../config/config');
var models = require('../models');
var Sequelize = require('sequelize');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('../services/jwt');
var path= require('path');
var fs= require('fs');


function getClients(req,res) {
	models.Client.findAll()
		.then(function(clients){
			res.status(200).send(clients)
		})
		.catch(function(error){
			res.status(500).send({message:"Error: "+ error})
		});
}

function getClient(req,res) {
	var rfc=req.params.rfc
	models.Client.findOne({where:{RFC:rfc}})
		.then(function(clients){
			res.status(200).send(clients)
		})
		.catch(function(error){
			res.status(500).send({message:"Error: "+ error})
		});
}


function saveClient(req,res){
	var params = req.body;
	console.log(params);

	var client = models.Client.build(params)

	//client.role= 'admin';
	client.image= 'null';

	if(params.Password){
		bcrypt.hash(params.Password,null,null, function(err,hash){
			client.Password=hash;
			if(client.Nombre!= null && client.Ap_Pat!=null && client.Ap_Pat!=null){
				//Guardar usuario en la bd 
				client.save()
					.then(function(product){
						res.status(200).send(client)
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
			}else {
				// Si faltan datos envía mensaje
				res.status(500).send({message:'Llena todos los campos'});
			}
		});
	}else{
		res.status(500).send({message:'Introduce la contraseña'});
	}
}


function loginClient(req,res){
	var params = req.body;
	var email= params.email;
	var password = params.password;

	models.Client.findOne({where:{Email:email.toLowerCase()}})
		.then(function(client){
			if(client){
					bcrypt.compare(password, client.dataValues.Password, (err, check )=>{
					if (check){
						//devolvemos el usuario
						if(params.gethash){
							// devolver un token 
							res.status(200).send({
								token: jwt.createToken(client)
							});
						}else{
							res.status(200).send({client});
						}
					}else {
						res.status(404).send({message:'El usuario no se ha podido logguear'});
					}
				});
			}else{
				res.status(404).send({message:"No existe el usuario"})
			}
		})
		.catch(function(error){
			res.status(500).send({message:"Error: "+ error})
		});

}


function updateClient(req,res){
	var clientId = req.params.rfc;
	var update = req.body;
	console.log(update)
	if (update.Password){
		bcrypt.hash(update.Password,null,null, function(err,hash){
		update.Password=hash;
			console.log(update)
			Update(update, clientId, res)
			
		})
	}else{
		Update(update, clientId, res)
	}		
}

function Update(update, clientId, res){
	models.Client.update(update, {where:{RFC:clientId}})
		.then(function(){
			models.Client.findOne({where:{RFC:clientId}})
				.then(function(client){
					if(client){
						res.status(200).send(client)
					}else{
						res.status(404).send({message:"No existe el Cliente"})
						}
					})
				})
		.catch(function(error){
			res.status(500).send({message:"Error: "+ error})
		})
}

module.exports={
	saveClient,
	updateClient,
	getClients,
	getClient,
	loginClient
}
