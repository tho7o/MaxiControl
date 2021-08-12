'use strict'

const jwt = require('jwt-simple');
const moment = require('moment');
const secret = (process.env.JWT_PWD).toString();

exports.createToken = email => {
	const payload = {
		email: email,
		iat:   moment().unix(), 
		exp:   moment().add(1, 'days').unix() 
	};
	return jwt.encode(payload, secret);
};

exports.validateToken = token => {
	try {
		return jwt.decode(token, secret);
	} catch (error) {
		return false;
	}
};