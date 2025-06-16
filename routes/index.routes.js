const express = require('express')
const router = express.Router();

const indexControllers = require('../controllers/index.controllers');

router.get('/', indexControllers.getHome);


module.exports = router