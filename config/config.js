module.exports={
	port: process.env.PORT||3000,
	db:{
		database: process.env.DB_NAME ||'dbApiRest',
		user: 'eComLoc',
		password:'juaeu¡o¡o',
		options:{
			host: process.env.HOST ||'localhost',
			dialect: process.env.DIALECT ||'mysql',
			pool:{
				maxConnections:100,
				minConnections:0,
				maxIdleTime:1000
			}
		}
	}
}