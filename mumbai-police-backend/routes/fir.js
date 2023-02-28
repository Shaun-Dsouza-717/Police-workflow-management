var express = require('express');
var router = express.Router();

const firController = require('../controllers/fir');

/* GET users listing. */
router.post('/insertFir', firController.insertFir);

module.exports = router;