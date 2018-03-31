var Sequelize=require('sequelize');

module.exports = (sequelize, DataTypes)=>{
	const Cliente = sequelize.define('Cliente',{
		RFC:{
			type: Sequelize.STRING(18),
			primaryKey: true,
			validate:{
				isAlphanumeric: true,
				max: 18
			}
		},
		Password:{
			type: Sequelize.STRING(35),
			required: true,
			validate:{
				max: 35
			}
		},
		Nombre:{
			type: Sequelize.STRING(35),
			required: true,
			validate:{
				isAlpha: true,
				max: 35
			}
		},
		Ap_Pat:{
			type: Sequelize.STRING(15),
			required: true,
			validate:{
				isAlpha: true,
				max: 15
			}
		},
		Ap_Mat:{
			type: Sequelize.STRING(15),
			required: true,
			validate:{
				isAlpha: true,
				max: 15
			}
		},
		Calle:{
			type: Sequelize.STRING(20),
			required: true,
			validate:{
				isAlpha: true,
				max: 20
			}
		},
		Colonia:{
			type: Sequelize.STRING(20),
			required: true,
			validate:{
				isAlpha: true,
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
			required: true,
			validate:{
				isAlpha: true,
				max: 20
			}
		},
		Estado:{
			type:Sequelize.STRING(20),
			required: true,
			validate:{
				isAlpha: true,
				max: 20
			}	
		},
		Cp:{
			type:Sequelize.STRING(5),
			required: true,
			validate:{
				isNumeric: true,
				max: 5
			}
		},
		Telefono:{
			type:Sequelize.STRING(14),
			required: true,
			validate:{
				isNumeric: true,
				max: 14
			}
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
