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
			type: Sequelize.STRING(1)
		},
		No_Rastreo:{
			type: Sequelize.STRING(50)
		},
		Costo_envio:{
			type: Sequelize.FLOAT
		},
		Subtotal:{
			type: Sequelize.FLOAT,
			validate:{
				isNumeric: true
			}
		},
		Iva:{
			type: Sequelize.FLOAT,
			validate:{
				isNumeric: true
			}
		},
		Total:{
			type: Sequelize.FLOAT,
			validate:{
				isNumeric: true
			}
		}
	});
	return Venta;
};