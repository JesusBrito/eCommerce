var Sequelize=require('sequelize');

module.exports = (sequelize, DataTypes)=>{
	const Producto = sequelize.define('Productos',{
		Id_prod:{
			type: Sequelize.STRING(30),
			primaryKey: true
		},
		Nombre:{
			type: DataTypes.STRING(50),
			required: true,
			validate:{
				max: 50
			}
		},
		Descripcion:{
			type: Sequelize.STRING(100),
			required: true,
			validate:{
				max: 100
			}
		},
		Str_img:{
			type:Sequelize.STRING(50)  
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

