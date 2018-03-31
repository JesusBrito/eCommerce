var Sequelize=require('sequelize');

module.exports = (sequelize, DataTypes)=>{
	const Categorias = sequelize.define('Categorias',{
		Id_Categoria:{
			type: Sequelize.INTEGER,
			primaryKey: true,
        	autoIncrement: true,
		},
		Nombre_Categoria:{
			type: Sequelize.STRING
		},
		Str_img:{
			type:Sequelize.STRING  
		}
	});
	return Categorias;
};