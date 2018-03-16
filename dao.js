'use strict'
var oracledb = require('oracledb');

var cns={
	user:"adminjj",
	password:"juaeuioio",
	connectString:"instanceoracle.cf21jk1wibrd.us-east-2.rds.amazonaws.com/ORCL"
};

function error (err, rs, cn) {
	if (err) {
		console.log(err.message);
		rs.contentType('application/json').status(500);
		rs.send(err.message);
		if(cn!=null) close(cn);
		return -1;
	} else {
		return 0;
	}
}

function open(sql, binds, dml, rs) {
	oracledb.getConnection(cns,(err,cn)=>{
		if(error(err,rs,null)==-1) return;
		cn.execute(sql, binds, {autoCommit: dml}, (err, result)=>{
			if(error(err, rs, cn)==-1)return;
			rs.contentType('application/json').status(200);
			if(dml)
				rs.send(JSON.stringify(result.rowsAffected));
			else{
				console.log(result.metaData);
				rs.status(200).send(JSON.stringify(result.rows));
			}
			close(cn)
		});
	})
}

function close(cn) {
	cn.release(
		(err)=>{
			if(err){console.error(err.message);}
		}
	)
}

module.exports={ 
	open,
	close
}