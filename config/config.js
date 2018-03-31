module.exports={
	port: process.env.PORT||8080,
	db:{
		database: process.env.DB_NAME ||'ORCL',
		user: 'creador',
		password:'12345',
		options:{
			host: process.env.HOST ||'instanceoracle.cf21jk1wibrd.us-east-2.rds.amazonaws.com',
			dialect: process.env.DIALECT ||'oracle',
			pool:{
				maxConnections:100,
				minConnections:0,
				maxIdleTime:1000
			}
		}
	}
}