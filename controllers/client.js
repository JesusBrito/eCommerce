var nodemailer = require('nodemailer');
var Sequelize = require('sequelize');
var bcrypt = require('bcrypt-nodejs');
var smtpTransport = require('nodemailer-smtp-transport');

var Config=require('../config/config');
var models = require('../models');
var jwt = require('../services/jwt');
var path= require('path');
var fs= require('fs');
const Op = Sequelize.Op;


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
	var condicion=req.params.condicion
	var conditionalData = {
	    	RFC: {
	        	$like: condicion+'%'
	    	}
		}
	models.Client.findAll({where:conditionalData})
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

function getClientValidation(req,res) {
	var condicion=req.params.condicion
	models.Client.findOne({where:{$or:[{RFC:condicion},{Email:condicion}]}})
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
	var params = req.body;

	var client = models.Client.build(params)

	client.image= 'null';

	if(params.Password){
		bcrypt.hash(params.Password,null,null, function(err,hash){
			client.Password=hash;
			if(client.Nombre!= null && client.Ap_Pat!=null && client.Ap_Pat!=null){
				//Guardar usuario en la bd 
				client.save()
					.then(function(){
						res.status(200).send({message:'Registro correcto'});
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
	var rfc= params.Rfc;
	var password = params.Password;
	models.Client.findOne({where:{RFC:rfc.toLowerCase()}})
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
							//console.log(client)
							//
							//client.splice(2, 2)
							//console.log(client)
							res.status(200).send({client});
						}
					}else {
						res.status(404).send({message:'El usuario no ha podido iniciar sesión'});
					}
				})
			}else{
				res.status(404).send({message:"No existe el usuario"})
			}
		})
		.catch(function(error){
			res.status(500).send({message:"Error: "+ error})
		})
}

function sendEmail(req,res){
	var params= req.body;
	var rfc=params.Rfc;

	models.Client.findOne({where:{RFC:rfc}})
		.then(function(client){
			if(client){
				var passwordAleatorio = Math.floor((Math.random() * 999999) + 100000);
				var email= client.Email

				//Actualizar password con la contraseña aleatoria
				
				params.Password=passwordAleatorio

				bcrypt.hash(params.Password,null,null, function(err,hash){
					params.Password=hash;

					models.Client.update(params, {where:{RFC:rfc}})
					.then(function(){
						if(client){
							//Envíar la contraseña por el email 
							// Definimos el transporter
							var transporter = nodemailer.createTransport(smtpTransport({
							    service: 'gmail',
							    auth: {
							        user: 'jesu291196@gmail.com',
							        pass: 'juaeuioio29'
							    }
							}));

							// Definimos el email
							var mailOptions = {
						    from: 'jesu291196@gmail.com',
						    to: `${email}`,
						    subject: 'Recuperación de contraseña',
						    text:  `Se ha generado una contraseña temporal, por favor ingresa con esta y actualiza tus datos ${passwordAleatorio}`
							};
							// Enviamos el email
							transporter.sendMail(mailOptions, function(error, info){
							    if (error){
							        res.status(500).send(error);
							    } else {
							        console.log("Email sent");
							        res.status(200).send();
							    }
							})
						}else{
							res.status(404).send({message:"No existe el Cliente"})
						}
					})
					.catch(function(error){
						res.status(500).send({message:"Error al hacer update: "+ error})
					})
				})
			}else{
				res.status(404).send({message:"No existe un cliente con el correo asociado"})
			}
		})
		.catch(function(error){
			res.status(500).send({message:"Error al buscar: "+ error})
		});
}


function updateClient(req,res){
	var clientId = req.params.rfc;
	var update = req.body;
	if (update.Password){
		bcrypt.hash(update.Password,null,null, function(err,hash){
		update.Password=hash;
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
						res.status(200).send()
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
	loginClient,
	getClientValidation,
	sendEmail
}
