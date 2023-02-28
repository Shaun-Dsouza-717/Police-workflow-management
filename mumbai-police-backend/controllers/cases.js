const { responseFormatter } = require("../util/api");
const connection = require("../database");

const getCrimeStatus = (req, res, next) => {
  let zonal_id = req.query.zonal_id;
  connection.query(`SELECT COUNT(\`f\`.\`number\`) AS \`total\`,
    COUNT(case when \`ci\`.\`case_status\` = 0 then \`f\`.\`number\` end) AS \`pending\`,
    COUNT(case when \`ci\`.\`case_status\` = 1 then \`f\`.\`number\` end) AS \`completed\`
    FROM \`fir_form\` \`f\`
    INNER JOIN \`crime_type\` \`c\` ON \`f\`.\`crime\` = \`c\`.\`id\`
    INNER JOIN \`case_info\` \`ci\` ON \`ci\`.\`case_name\` = \`c\`.\`crime_name\`
    WHERE \`f\`.\`zonal_id\` = ${zonal_id};`),
    (err, result) => {
      if (err) {
        res.json(responseFormatter(500, `${err}`, "Error"));
      } else {
        res.json(responseFormatter(200, result, "Success"));
      }
    };
};

const getPendingAndCompletedCases = (req, res, next) => {
  let zonal_id = req.query.zonal_id;
  let case_status = req.query.case_status;
  connection.query(`SELECT \`f\`.\`date\`, \`ci\`.\`case_name\`,\`f\`.\`section\`,\`ci\`.\`case_pdf\`
    FROM \`fir_form\` \`f\`
    INNER JOIN \`crime_type\` \`c\` ON \`f\`.\`crime\` = \`c\`.\`id\`
    INNER JOIN \`case_info\` \`ci\` ON \`ci\`.\`case_name\` = \`c\`.\`crime_name\`
    AND \`f\`.\`zonal_id\` = ${zonal_id} AND \`ci\`.\`case_status\` = ${case_status};`),
    (err, result) => {
      if (err) {
        res.json(responseFormatter(500, `${err}`, "Error"));
      } else {
        res.json(responseFormatter(200, result, "Success"));
      }
    };
};

module.exports = {
  getCrimeStatus,
  getPendingAndCompletedCases,
};
