'use strict'

const express = require ('express');
const testController = require ('../controllers/test');
const api = express.Router();
const md_auth = require ('../middleware/authenticated')

api.get('/', md_auth.ensureAuth, testController.test);

module.exports = api;
