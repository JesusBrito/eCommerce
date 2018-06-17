var models = require('../models')
var Sequelize = require('sequelize');
const Op = Sequelize.Op;
var Config=require('../config/config');
var moment = require('moment');

function saveSale(req,res){
	var params= req.body;
	var sale = models.Sale.build(params)
	sale.save()
		.then(function(sale){
			res.status(200).send(sale)
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

function saveDetail(req,res){
	var params= req.body;
	var saleDetail = models.Sale_Detail.build(params)
	saleDetail.save()
		.then(function(saleDetail){
			res.status(200).send()
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


function getSaleClient(req,res) {
	var condicion = req.params.rfc;
	models.Sale.findAll({where:{ClienteRFC:condicion},
						include:[
							{model: models.Sale_Detail,
								include:[
									{model:models.Product},
									{model:models.Color}]
							}
						]})


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
	models.Sale.findAll({where:{No_Venta:condicion}, 
		include:[
			{model: models.Sale_Detail,
				include:[
					{model:models.Almacen_Color}]
				}
		]})
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


function getSaleNoClient(req,res) {
	var noVenta = req.params.noventa;
	var rfc = req.params.rfc;
	models.Sale.findAll({where:{$and:[{ClienteRFC:rfc},{No_Venta:noVenta}]}, 
		include:[
			{model: models.Sale_Detail,
				include:[
					{model:models.Product},
					{model:models.Color}]
				}
		]})
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


function updateSale(req,res){
	var params= req.body;
	var condicion=params.No_Venta;
	console.log(condicion)
	models.Sale.update(params, {where:{No_Venta:condicion}})
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

	if(inicioR&&finR){
		var conditionalData = {
	    	Fecha: {
	        	$between: [inicio, fin]
	    	}
		}
		models.Sale.findAll({where: conditionalData, 
						include:[
							{model: models.Sale_Detail}
						]})
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
		models.Sale.findAll({
			include:[
				{model: models.Sale_Detail}
		]})
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
	updateSale,
	getSaleReport,
	saveSale,
	saveDetail,
	getSaleNoClient
}