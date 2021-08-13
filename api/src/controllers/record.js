'use strict'

const bcrypt = require('bcrypt-nodejs');
const jwt = require ('../middleware/jwt');
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

// validate token
async function validateTokenUser(req, res){
	const token = req.headers.token;
	const validation = await jwt.validateToken( token );
	if (validation) return res.status(200).send({status:true});
  return res.status(200).send({status:false});
}

// setBreastFeeding
function setBreastFeeding (req, res){
    const params = req.body;
    if( (params.minutes) && (params.minutes >= 0 && params.minutes <= 360)   ){
  
          const sql = "INSERT INTO breast_feedings (`breast_feeding_minutes`) VALUES ( " + `'${params.minutes}' )`;
          pool.getConnection((err, conn) => {
            conn.query(sql, (err, breastFeeding) => {
              if (err) {
                  throw err;
                  return res.status(400).send({err});
              }else{
                  return res.status(200).send({breastFeeding});
              }
            });
            conn.release();
          });
    }else{
          return res.status(400).send({
              error : 'no allowed minutes number',
            });
    }
  }

// getBreastFeeding
function getBreastFeedings (req, res){
    // const params = req.body;
    const sql = "SELECT * FROM breast_feedings"
    pool.getConnection((err, conn) => {
        conn.query(sql, (err, breastFeedings) => {
            if (err) throw err;
            return res.status(200).send({breastFeedings});
        });
        conn.release();
    });
  }

// setDiapper
function setDiapper (req, res){
    const params = req.body;
    if(((params.type) && (params.type > 0 && params.type <= 3) )  ){
  
          const sql = "INSERT INTO diappers (`diapper_type`) VALUES ( " + `'${params.type}' )`;
          pool.getConnection((err, conn) => {
            conn.query(sql, (err, diapper) => {
                if (err) {
                    throw err;
                    return res.status(400).send({err});
                }else{
                    return res.status(200).send({diapper});
                }
            });
            conn.release();
          });
    }else{
        return res.status(400).send({
            error : 'no allowed type number',
          });
    }
  }

// getDiapper
function getDiappers (req, res){
    // const params = req.body;
    const sql = "SELECT * FROM diappers"
    pool.getConnection((err, conn) => {
        conn.query(sql, (err, diappers) => {
            if (err) throw err;
            return res.status(200).send({diappers});
        });
        conn.release();
    });
  }

module.exports = {
    login,
    validateTokenUser,
    setBreastFeeding,
    getBreastFeedings,
    setDiapper,
    getDiappers
}
