var Sequelize=require('sequelize-oracle');

module.exports = (sequelize, DataTypes)=>{
	const Det_Venta = sequelize.define('Detalle_Venta',{
		Id_Detalle:{
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		Cantidad:{
			type: Sequelize.INTEGER
		},
		Subtotal:{
			type: Sequelize.FLOAT
		},
		Precio:{
			type: Sequelize.FLOAT
		}
	});
	return Det_Venta;
};