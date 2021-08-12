'use strict'

const app = require('./app');
const port = 3800;
//const port = 80;
const mysql = require('mysql2');
const pool = mysql.createPool({
                  user:(process.env.USER_DB).toString(),
                  host:(process.env.HOST_DB).toString(),
                  port:(process.env.PORT_DB).toString(),
                  password:(process.env.PASSWORD_DB).toString(),
                  database:(process.env.NAME_DB).toString(),
                  dateStrings: 'date',
                  connectionLimit: process.env.DB_CONNECTION_LIMIT
         });

//Deploy on Port
app.listen (port, () => {
     console.log("Listening on port " + port);
   });

//Export module
exports.getConnection = callback => {
    pool.getConnection( (err, connection) => {
           if (err) {
             console.error('error connecting: ' + err.stack);
             return;
           }
           callback(err, connection);
   });
};
