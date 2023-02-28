var express = require('express');
var router = express.Router();

const mapController = require('../controllers/map');

/* GET users listing. */
router.get('/getTotalCrime', mapController.getTotalCrime);
router.get('/getCrimeByEachZone', mapController.getCrimeByEachZone);

module.exports = router;