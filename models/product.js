var Sequelize=require('sequelize-oracle');

module.exports = (sequelize, DataTypes)=>{
	const Producto = sequelize.define('Productos',{
		Id_prod:{
			type: Sequelize.STRING(30),
			primaryKey: true
		},
		Nombre:{
			type: DataTypes.STRING(30),
			required: true
		},
		Descripcion:{
			type: Sequelize.STRING(100) 
		},
		Str_img:{
			type:Sequelize.STRING(50)  
		},
		Precio:{
			type:Sequelize.FLOAT
		},
		Stock:{
			type:Sequelize.INTEGER
		},
		Estatus:{
			type: Sequelize.STRING(1)
		},
		Alto:{
			type:Sequelize.FLOAT
		},
		Largo:{
			type:Sequelize.FLOAT
		},
		Ancho:{
			type:Sequelize.FLOAT
		}
	});
	return Producto;
};

