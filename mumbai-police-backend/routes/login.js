var express = require('express');
var router = express.Router();

const loginController = require('../controllers/login');

/* GET users listing. */
router.post('/validate', loginController.verifyAccount);

module.exports = router;