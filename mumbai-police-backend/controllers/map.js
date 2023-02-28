const { responseFormatter } = require("../util/api");
const connection = require("../database");

const getTotalCrime = (req, res, next) => {
  connection.query(
    `SELECT COUNT(\`f\`.\`number\`) AS \`total crime\`,\`z\`.\`name\` AS \`name\` FROM \`fir_form\` \`f\` INNER JOIN \`zone\` \`z\` ON \`z\`.\`id\` = \`f\`.\`zonal_id\` GROUP BY \`zonal_id\`;`,
    (err, result) => {
      if (err) {
        res.json(responseFormatter(500, "Error", `${err}`));
      } else {
        res.json(responseFormatter(200, result, "Success"));
      }
    }
  );
};

const getCrimeByEachZone = (req, res, next) => {
  let zonal_id = req.query.zonal_id;
  connection.query(
    `SELECT \`c\`.\`crime_name\`,COUNT(\`c\`.\`crime_name\`) AS \`total crimes\` FROM \`fir_form\` \`f\` INNER JOIN \`zone\` \`z\` ON  \`f\`.\`zonal_id\` = \`z\`.\`id\` INNER JOIN \`crime_type\` \`c\` ON \`f\`.\`crime\` = \`c\`.\`id\` AND \`z\`.\`id\` = ${zonal_id} GROUP BY \`c\`.\`crime_name\`;`,
    (err, result) => {
      if (err) {
        res.json(responseFormatter(500, `${err}`, "Error"));
      } else {
        res.json(responseFormatter(200, result, "Success"));
      }
    }
  );
};

module.exports = {
  getTotalCrime,
  getCrimeByEachZone,
};
