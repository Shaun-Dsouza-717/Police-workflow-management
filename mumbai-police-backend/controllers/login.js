const { responseFormatter } = require("../util/api");
const connection = require("../database");

const verifyAccount = (req, res, next) => {
  let zonal_id = req.body.zonal_id;
  let password = req.body.password;
  connection.query(
    `SELECT * FROM login WHERE zonal_id = '${zonal_id}' AND password = '${password}'`,
    (err, result) => {
      if (err) {
        res.json(
          responseFormatter(500, "Error", "Error in retrieving officials")
        );
      } else {
        if (result.length > 0) {
          res.json(responseFormatter(200, "Success", "Validated successfully"));
        }
      }
    }
  );
};

module.exports = {
  verifyAccount,
};
