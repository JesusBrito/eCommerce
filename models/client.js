var Sequelize=require('sequelize');

module.exports = (sequelize, DataTypes)=>{
	const Cliente = sequelize.define('Cliente',{
		RFC:{
			type: Sequelize.STRING(18),
			primaryKey: true,
			validate:{
				max: 18
			}
		},
		Password:{
			type: Sequelize.STRING(100),
			required: true,
			
		},
		Nombre:{
			type: Sequelize.STRING(35),
			required: true,
			validate:{
				max: 35
			}
		},
		Ap_Pat:{
			type: Sequelize.STRING(15),
			required: true,
			validate:{
				max: 15
			}
		},
		Ap_Mat:{
			type: Sequelize.STRING(15),
			required: true,
			validate:{
				max: 15
			}
		},
		Calle:{
			type: Sequelize.STRING(20),
			required: true,
			validate:{
				max: 20
			}
		},
		Colonia:{
			type: Sequelize.STRING(20),
			required: true,
			validate:{
				max: 20
			}
		},
		Numero:{
			type:Sequelize.INTEGER,
			required: true,
			validate:{
				isNumeric: true
			}
		},
		Ciudad:{
			type: Sequelize.STRING(20),
			required: true
		},
		Estado:{
			type:Sequelize.STRING(20),
			required: true
		},
		Cp:{
			type:Sequelize.STRING(5),
			required: true
		},
		Telefono:{
			type:Sequelize.STRING(14),
			required: true
		},
		Role:{
			type:Sequelize.STRING(8),
		},
		Email:{
			type:Sequelize.STRING(40),
			validate:{
				isEmail: true,
				notEmpty: {msg: "-> Falta el correo electronico"},
				max: 35
			}
		}
	},{
		indexes: [
		    // Create a unique index 

		   {
		      unique: true,
		      fields: ['Email']
		   },
		]
	});
	return Cliente;
};
