var Sequelize=require('sequelize-oracle');

module.exports = (sequelize, DataTypes)=>{
	const Producto = sequelize.define('Productos',{
		Id_prod:{
			type: Sequelize.INTEGER,
			primaryKey: true
		},
		Nombre:{
			type: DataTypes.STRING(30),
			required: true
		},
		Descripcion:{
			type: Sequelize.STRING 
		},
		Str_img:{
			type:Sequelize.STRING  
		},
		Precio:{
			type:Sequelize.FLOAT
		},
		Stock:{
			type:Sequelize.INTEGER
		},
		Estatus:{
			type: Sequelize.STRING
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

