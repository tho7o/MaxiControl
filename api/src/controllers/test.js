'use strict'

//const NODE_ENV = process.env.NODE_ENV || 'dev';   // or prod to production environment
// myVar: process.env.MYVAR to using

//require('dotenv').config({
//  path: `.env.${NODE_ENV}`
//});

const fetch = require('node-fetch');


/**
 * @swagger
 * /v1/test/:
 *   get:
 *     summary: Used to tests purposes.
 *     description: Used to tests purposes.
 *     tags:
 *       - test
 *     responses:
 *       403:
 *         description: Authorization is missing.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: object
 *                   properties:
 *                     message:
 *                       type: string
 *                       description: Error message.
 *                       example: Request does not have authorization header  
 *       200:
 *         description: Success message.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: object
 *                   properties:
 *                     message:
 *                       type: string
 *                       description: Success message.
 *                       example: Test OK           
*/

// TESTER
function test(req, res){
  res.status(200).send({
    message: "Test OK",
  });
}

module.exports = {
    test
}
















