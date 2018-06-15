var Sequelize=require('sequelize');

module.exports = (sequelize, DataTypes)=>{
	const Almacen_Color = sequelize.define('Almacen_Color',{
		Id_Alm_Color:{
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		Precio:{
			type:DataTypes.FLOAT
		},
		Stock:{
			type:DataTypes.INTEGER
		},
	});
	return Almacen_Color;
};