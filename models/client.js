var Sequelize=require('sequelize-oracle');

module.exports = (sequelize, DataTypes)=>{
	const Cliente = sequelize.define('Cliente',{
		RFC:{
			type: Sequelize.STRING(18),
			primaryKey: true
		},
		Nombre:{
			type: Sequelize.STRING(35),
			required: true
		},
		Ap_Pat:{
			type: Sequelize.STRING(15),
			required: true
		},
		Ap_Mat:{
			type: Sequelize.STRING(15),
			required: true
		},
		Calle:{
			type: Sequelize.STRING(20),
			required: true
		},
		Colonia:{
			type: Sequelize.STRING(20),
			required: true
		},
		Numero:{
			type:Sequelize.INTEGER,
			required: true
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
		Email:{
			type:Sequelize.STRING(40),
			validate:{
				isEmail: true,
				notEmpty: {msg: "-> Falta el correo electronico"}
			}
		}
	},{
		indexes: [
		    // Create a unique index on email
		    {
		      unique: true,
		      fields: ['Email']
		    }
		]
	});
	return Cliente;
};
