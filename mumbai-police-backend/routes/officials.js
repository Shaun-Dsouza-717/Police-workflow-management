var express = require('express');
var router = express.Router();

const offcialsController = require('../controllers/officials');

/* GET users listing. */
router.get('/', offcialsController.getOfficials);

module.exports = router;
