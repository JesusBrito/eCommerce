var Config=require('../config/config');
var models = require('../models');
var Sequelize = require('sequelize');
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
	var condicion = req.params.rfc;
	models.Client.findOne({where:{RFC:condicion}})
		.then(function(client){
			if(client){
				res.status(200).send(client)
			}else{
				res.status(404).send({message:"No existe el cliente"})
			}
		})
		.catch(function(error){
			res.status(500).send({message:"Error: "+ error})
		});
}

function saveClient(req,res){
	var params= req.body;
	var userR= params.Usuario;
	var passR= params.Password;
	var client = models.Client.build(params);

	Config.db.user='Creator';
	Config.db.password='12345';

	console.log(Config);

	var sequelize = new Sequelize(
		Config.db.database,
		Config.db.user,
		Config.db.password,
		Config.db.options
	)

	sequelize
  		.query(' CALL SP_CREATE_USER(:user,:pass)', 
        	{replacements: { user: userR, pass: passR}})
  		.then(function(){
  			client.save()
				.then(function(client){
					res.status(200).send(client)
				})
				.catch(error=>{
  					res.status(500).send({error , Config})
  				})
  		})
  		.catch(error=>{
  			res.status(500).send({error})
  		});
}

function updateClient(req,res){
	var params= req.body;
	var condicion=params.RFC;
	models.Client.update(params, {where:{RFC:condicion}})
	.then(function(){
		models.Client.findOne({where:{RFC:condicion}})
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
	getClient
}
