var Sequelize=require('sequelize');

module.exports = (sequelize, DataTypes)=>{
	const Det_Venta = sequelize.define('Detalle_Venta',{
		Id_Detalle:{
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		Cantidad:{
			type: Sequelize.INTEGER,
			validate:{
				isNumeric: true
			}
		},
		Subtotal:{
			type: Sequelize.FLOAT,
			validate:{
				isNumeric: true
			}
		},
		Precio:{
			type: Sequelize.FLOAT,
			validate:{
				isNumeric: true
			}
		}
	});
	return Det_Venta;
};