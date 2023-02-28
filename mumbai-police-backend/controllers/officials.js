
const {responseFormatter} = require('../util/api');

const getOfficials = (req, res, next) => {
    res.json(responseFormatter(200, "Success", "Officials retrieved successfully"));
};
    
module.exports = {
    getOfficials
};