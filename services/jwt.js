'use strict'

var jwt= require('jwt-simple');
var moment= require('moment');
var secret = 'clave_secreta';

exports.createToken = function(client){
	var payload={
		sub: client.RFC,
		name:client.Nombre,
		apPat:client.Ap_Pat,
		apMat:client.Ap_Mat,
		email: client.Email,
		role: client.Role,
		iat: moment().unix(),
		exp: moment().add(30, 'days').unix
	};		

	return jwt.encode(payload, secret);
};