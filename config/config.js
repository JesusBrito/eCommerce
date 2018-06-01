module.exports={
	port: process.env.PORT||3000,
	db:{
		database: process.env.DB_NAME ||'dbApiRest',
		//database: process.env.DB_NAME ||'instanciamysql.cfusuv1kv2of.us-east-2.rds.amazonaws.com',
		user: 'JesusBB',
		password:'JesusBB29',
		//user: 'eComLoc',
		//password:'juaeu¡o¡o',
		options:{
			//host: process.env.HOST ||'localhost',
			host: process.env.HOST ||'instanciamysql.cfusuv1kv2of.us-east-2.rds.amazonaws.com',
			dialect: process.env.DIALECT ||'mysql',
			pool:{
				maxConnections:100,
				minConnections:0,
				maxIdleTime:1000
			}
		}
	}
}