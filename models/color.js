var Sequelize=require('sequelize');

module.exports = (sequelize, DataTypes)=>{
	const Colores = sequelize.define('Colores',{
		Id_Color:{
			type: Sequelize.INTEGER,
			primaryKey: true,
        	autoIncrement: true,
		},
		Nombre_Color:{
			type: Sequelize.STRING(20)
		}
	});
	return Colores;
};