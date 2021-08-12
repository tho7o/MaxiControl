'use strict'

const express = require ('express');
const userController = require ('../controllers/user');
const api = express.Router();
const md_auth = require ('../middleware/authenticated');

api.post('/login', userController.login);
// api.get('/token', md_auth.ensureAuth, userController.createTokenUser);
api.get('/validate', md_auth.ensureAuth, userController.validateTokenUser);

module.exports = api;