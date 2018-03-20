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

//IMPORTACIÓN DE MODELOS
var Product = sequelize.import(path.join(__dirname,'product'));
var Client = sequelize.import(path.join(__dirname,'client'));
var Sale = sequelize.import(path.join(__dirname,'sale'));
var Color = sequelize.import(path.join(__dirname,'color'));
var Category = sequelize.import(path.join(__dirname,'category'));
var Sale_Detail = sequelize.import(path.join(__dirname,'sale_detail'));
var Sale = sequelize.import(path.join(__dirname,'sale'));

//RELACIONES

//Sale.belongsTo(Client);
//Client.hasMany(Sale);
Client.hasMany(Sale,{foreignKey:'RFC_FK'});
Sale.belongsTo(Client,{as: 'Cliente', foreignKey:'RFC_FK'},{onDelete: 'cascade', hooks:true});

Product.belongsTo(Category);
Category.hasMany(Product);
//Product.belongsTo(Category,{as:'Categoria', foreignKey: 'Id_Categoria_FK'});
//Category.hasMany(Product,{foreignKey: 'Id_Categoria_FK'});

Sale_Detail.belongsTo(Color);
Color.hasMany(Sale_Detail);
//Color.hasMany(Product,{foreignKey: 'Id_Color_FK'});
//Product.belongsTo(Color,{as:'Color', foreignKey: 'Id_Color_FK'});

Sale_Detail.belongsTo(Product);
Product.hasMany(Sale_Detail);
//Product.hasMany(Sale_Detail,{foreignKey: 'Id_Producto_FK'});
//Sale_Detail.belongsTo(Product,{as:'Product', foreignKey: 'Id_Producto_FK' });

Sale_Detail.belongsTo(Sale);
Sale.hasMany(Sale_Detail);
//Sale.hasMany(Sale_Detail,{foreignKey: 'No_Venta_FK'});
//Sale_Detail.belongsTo(Sale, {as:'Sale', foreignKey: 'No_Venta_FK'});

//sequelize.sync({force: true});
//sequelize.sync();
exports.Product = Product;
exports.Client = Client;
exports.Sale = Sale;
exports.Category = Category;
exports.Color = Color;
exports.Sale_Detail = Sale_Detail;
