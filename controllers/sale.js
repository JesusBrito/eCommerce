var models = require('../models')
var Sequelize = require('sequelize-oracle');
const Op = Sequelize.Op;
var Config=require('../config/config');
var moment = require('moment');

function getSaleClient(req,res) {
	var condicion = req.params.rfc;
	models.Sale.findAll({include:[models.Sale_Detail],where:{RFC_FK:condicion}})
		.then(function(sale){
			if(sale){
				res.status(200).send(sale)
			}else{
				res.status(404).send({message:"No existen ventas"})
			}
		})
		.catch(function(error){
			res.status(500).send({message:"Error: "+ error})
		});
}

function getSaleNo(req,res) {
	var condicion = req.params.noventa;
	models.Sale.findOne({where:{No_Venta:condicion}, 
		include:[{model: models.Sale_Detail}]})
		.then(function(sale){
			if(sale){
				res.status(200).send(sale)
			}else{
				res.status(404).send({message:"No existen ventas"})
			}
		})
		.catch(function(error){
			res.status(500).send({message:"Error: "+ error})
		});
}

function changeSaleStatus(req,res) {
	var params= req.params;
	var status=params.status;
	var condicion=params.id;
	models.Sale.update( {Estatus: status}, {where: {No_Venta:condicion}})
		.then(function(){
			models.Sale.findOne({where:{No_Venta:condicion}})
				.then(function(sale){
					if(sale){
						res.status(200).send(sale)
					}else{
						res.status(404).send({message:"No existe la venta"})
					}
				})
		})
		.catch(function(error){
			res.status(500).send({message:"Error: "+ error})
		})	
}

function addSalesTracking(req,res) {
	var params= req.body;
	var numero=params.norastreo;
	var condicion= params.id;
	models.Sale.update( {No_Rastreo: numero}, {where: {No_Venta:condicion}})
		.then(function(){
			models.Sale.findOne({where:{No_Venta:condicion}})
				.then(function(sale){
					if(sale){
						res.status(200).send(sale)
					}else{
						res.status(404).send({message:"No existe la venta"})
					}
				})
		})
		.catch(function(error){
			res.status(500).send({message:"Error: "+ error})
		})	
}

function getSaleReport(req,res){
	var params = req.body; 
	var inicioR = params.fechaini;
	var finR = params.fechafin;
	var inicio = new Date(inicioR);
	var fin = new Date(finR);

	var today = moment("19-03-2018").format('DD/MM/YYYY');

	if(inicio&&fin){
		var conditionalData = {
	    	Fecha: {
	        	$between: [inicio, fin]
	    	}
		}
		console.log(inicio+' _________ '+fin);
		models.Sale.findAll({where: conditionalData, include:[{model: models.Sale_Detail}]})
		.then(function(sale){
			if(sale){
				res.status(200).send(sale)
			}else{
				res.status(404).send({message:"No existen ventas"})
			}
		})
		.catch(function(error){
			res.status(500).send({message:"Error: "+ error})
		});
	}else{
		models.Sale.findAll({include:[{model: models.Sale_Detail}]})
		.then(function(sale){
			if(sale){
				res.status(200).send(sale)
			}else{
				res.status(404).send({message:"No existen ventas"})
			}
		})
		.catch(function(error){
			res.status(500).send({message:"Error: "+ error})
		});
	}
}

module.exports={
	getSaleClient,
	getSaleNo,
	changeSaleStatus,
	addSalesTracking,
	getSaleReport
}