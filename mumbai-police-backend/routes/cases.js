var express = require('express');
var router = express.Router();

const casesController = require('../controllers/cases');

/* GET users listing. */
router.get('/getCrimeStatus', casesController.getCrimeStatus);
router.get('/getPendingAndCompletedCases', casesController.getPendingAndCompletedCases);

module.exports = router;