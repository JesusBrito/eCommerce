var path= require('path');
var fs= require('fs');
var Sequelize=require('sequelize');
var Config=require('../config/config');

var sequelize = new Sequelize(
	Config.db.database,
	Config.db.user,
	Config.db.password,
	Config.db.options
)

//IMPORTACIÓN DE MODELOS
var Product = sequelize.import(path.join(__dirname,'product'));
var Client = sequelize.import(path.join(__dirname,'client'));
var Sale = sequelize.import(path.join(__dirname,'sale'));
var Color = sequelize.import(path.join(__dirname,'color'));
var Category = sequelize.import(path.join(__dirname,'category'));
var Sale_Detail = sequelize.import(path.join(__dirname,'sale_detail'));
var Sale = sequelize.import(path.join(__dirname,'sale'));
var Almacen_Color = sequelize.import(path.join(__dirname,'almXcolor'));

//RELACIONES
Sale.belongsTo(Client);
Client.hasMany(Sale);

Product.belongsTo(Category);
Category.hasMany(Product);

Sale_Detail.belongsTo(Sale);
Sale.hasMany(Sale_Detail);

Sale_Detail.belongsTo(Almacen_Color);
Almacen_Color.hasMany(Sale_Detail);

Almacen_Color.belongsTo(Product);
Product.hasMany(Almacen_Color);

Almacen_Color.belongsTo(Color);
Color.hasMany(Almacen_Color);
//sequelize.sync({force: true});
//sequelize.sync();



//
exports.Product = Product;
exports.Client = Client;
exports.Sale = Sale;
exports.Category = Category;
exports.Color = Color;
exports.Sale_Detail = Sale_Detail;
exports.Almacen_Color = Almacen_Color;