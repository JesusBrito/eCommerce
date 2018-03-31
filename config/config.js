module.exports={
	port: process.env.PORT||8080,
	db:{
		database: process.env.DB_NAME ||'dbApiRest',
		user: 'adminjj',
		password:'juaeuioio',
		options:{
			host: process.env.HOST ||'instancemysql.cf21jk1wibrd.us-east-2.rds.amazonaws.com',
			dialect: process.env.DIALECT ||'mysql',
			pool:{
				maxConnections:100,
				minConnections:0,
				maxIdleTime:1000
			}
		}
	}
}