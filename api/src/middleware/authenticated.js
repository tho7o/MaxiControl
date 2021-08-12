  
'use strict'

const jwt = require('jwt-simple');
const moment = require('moment');
const secret = (process.env.JWT_PWD).toString();

exports.ensureAuth = (req, res, next) => {
	if(!req.headers.authorization) return res.status(403).send({ message: 'Request does not have authorization header' });

	//limpia el token de comillas
	const token = req.headers.authorization.replace(/['"]+/g, '');

	//Verifica si el token tiene el largo correcto
	const segments = token.split('.');
	if (segments.length !== 3) {
		return res.status(406).send({
			message: 'Not enough or too many segments in token'
		});
	}

	//Si tiene el largo correcto:
	try {
		const payload = jwt.decode(token, secret, {ignoreExpiration: true});
		if ( payload.exp <= moment().unix() ) {
			return res.status(401).send({
				message: 'expired token'
			});
		}
	}catch(ex){
		return res.status(404).send({
				message: 'invalid token'
			});
	}

	next();
}