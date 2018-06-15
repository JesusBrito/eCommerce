var models = require('../models')
var Sequelize = require('sequelize')
var Config=require('../config/config')
const Op = Sequelize.Op;

//Agregar stock
function addStock(req,res){
	var params= req.body
	var stockR=params.stock
	var condicion=params.Id_Alm //CAMBIAR ATRIBUTO EN LA VISTA
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

//Obtener almacenes
function getAlmacen(req,res) {
	models.Almacen_Color.findAll({include:[
																	{model:models.Product},
																	{model:models.Color}
																]})
		.then(function(Almacenes){
			res.status(200).send(Almacenes)
		})
		.catch(function(error){
			res.status(500).send({message:"Error: "+ error})
		});
}

//OBTENER ALMACEN X COLOR
function getAlmacenXColor(req,res) {
  var params= req.params
	var idColor=params.idColor
  var idProd=params.idProd
	models.Almacen_Color.findOne({where:{$and:[{ColoreIdColor:idColor},{ProductoIdProd:idProd}]}, include:[{model:models.Color}]})

		.then(function(Almacen){
			if(Almacen){
				res.status(200).send(Almacen)
			}else{
				res.status(404).send({message:"No existe un almacén con ese color"})
			}
		})
		.catch(function(error){
			res.status(500).send({message:"Error: "+ error})
		})
}


module.exports={
  addStock,
  getAlmacen,
	getAlmacenXColor
}
