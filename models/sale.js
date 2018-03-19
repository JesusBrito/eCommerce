var Sequelize=require('sequelize-oracle');

module.exports = (sequelize, DataTypes)=>{
	const Venta = sequelize.define('Ventas',{
		No_Venta:{
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		Fecha:{
			type: Sequelize.DATE
		},
		Estatus:{
			type: Sequelize.STRING(9)
		},
		No_Rastreo:{
			type: Sequelize.STRING(50)
		},
		Costo_envio:{
			type: Sequelize.FLOAT
		},
		Subtotal:{
			type: Sequelize.FLOAT
		},
		Iva:{
			type: Sequelize.FLOAT
		},
		Total:{
			type: Sequelize.FLOAT
		}
	});
	return Venta;
};