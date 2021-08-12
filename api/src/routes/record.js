'use strict'

const express = require ('express');
const api = express.Router();
const md_auth = require ('../middleware/authenticated')
const recordController = require ('../controllers/record');

//Endpoint test
// api.get('/test', md_auth.ensureAuth, recordController.test);

//Endpoints breastfeeding
api.post('/breastfeedings/set', md_auth.ensureAuth, recordController.setBreastFeeding);
api.get('/breastfeedings', md_auth.ensureAuth, recordController.getBreastFeedings);

//Endpoints diappers
api.post('/diappers/set', md_auth.ensureAuth, recordController.setDiapper);
api.get('/diappers', md_auth.ensureAuth, recordController.getDiappers);

module.exports = api;
