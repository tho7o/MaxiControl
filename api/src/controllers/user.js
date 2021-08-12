'use strict'

const bcrypt = require('bcrypt-nodejs');
const jwt = require ('../middleware/jwt');
const fetch = require('node-fetch');
const pool = require('../index');

function login (req, res){
  const params = req.body;
  const sql = "SELECT * FROM users WHERE `users_email` = "  + `'${params.email}'`;
  pool.getConnection((err, conn) => {
    conn.query(sql, (err, user) => {
      if (err) return res.status(500).send({ error: 'Error in Request' });
      if (user.length == 0) return res.status(404).send({error: 'there is not user'});
      const password = user[0].users_password;

      bcrypt.compare(params.password, password, (err, check) => {
        if(err) return res.status(500).send({ message: 'Error in encrypt', err });
        if(!check) return res.status(404).send({message: 'authorization denied'});
        return res.status(200).send({ 
          status:"logged", 
          token: jwt.createToken(params.email)
        });
      });

    });
    conn.release();
  });
}

// validate apptoken
async function validateTokenUser(req, res){
	const token = req.headers.authorization;
	const validation = await jwt.validateToken(token);
	if (validation) return res.status(200).send({status:true});
  return res.status(200).send({status:false});
}

module.exports = {
    login,
    validateTokenUser
}
