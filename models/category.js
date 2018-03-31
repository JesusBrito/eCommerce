var Sequelize=require('sequelize-oracle');

module.exports = (sequelize, DataTypes)=>{
	const Categorias = sequelize.define('Categorias',{
		Id_Categoria:{
			type: Sequelize.STRING(10),
			primaryKey: true,
			autoIncrement: true
		},
		Nombre_Categoria:{
			type: Sequelize.STRING(20)
		},
		Str_img:{
			type:Sequelize.STRING(50)  
		}
	});
	return Categorias;
};