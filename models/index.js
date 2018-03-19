var path= require('path');
var fs= require('fs');
var Sequelize=require('sequelize-oracle');
var Config=require('../config/config');

var sequelize = new Sequelize(
	Config.db.database,
	Config.db.user,
	Config.db.password,
	Config.db.options
)

var Product = sequelize.import(path.join(__dirname,'product'));
//sequelize.sync({force: true});
sequelize.sync();
exports.Product = Product;
exports.SequelizeCon= sequelize; 