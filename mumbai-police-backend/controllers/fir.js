const { responseFormatter, calculateAge } = require("../util/api");
const connection = require("../database");

const insertFir = (req, res, next) => {
  let date = req.body.date;
  let full_name = req.body.full_name;
  let dob = req.body.dob;
  //   let age = req.body.age;
  let age = calculateAge(req.body.dob);
  let nationality = req.body.nationality;
  let passport_no = req.body.passport_no;
  let date_of_issue = req.body.date_of_issue;
  let place_of_issue = req.body.place_of_issue;
  let occupation = req.body.occupation;
  let address = req.body.address;
  let date_of_offence = req.body.date_of_offence;
  let place_of_offence = req.body.place_of_offence;
  let crime_type = req.body.crime_type;
  let act = req.body.act;
  let section = req.body.section;
  let details_of_suspect = req.body.details_of_suspect;
  let fir_contents = req.body.fir_contents;
  let zonal_id = req.body.zonal_id;
  connection.query(
    `INSERT INTO \`fir_form\` (\`date\`, \`full_name\`, \`dob\`, \`age\`, \`nationality\`, \`passport_no\`, \`date_of_issue\`, \`place_of_issue\`, \`occupation\`, \`address\`, \`date_of_offence\`, \`place_of_offence\`, \`crime\`, \`act\`, \`section\`, \`details_of_suspect\`, \`fir_contents\`, \`zonal_id\`) 
    VALUES ('${date}', '${full_name}', '${dob}', ${age}, '${nationality}', '${passport_no}', '${date_of_issue}', '${place_of_issue}', '${occupation}', '${address}', '${date_of_offence}', '${place_of_offence}', ${crime_type}, '${act}', '${section}', '${details_of_suspect}', '${fir_contents}', ${zonal_id});`,
    (err, result) => {
      if (err) {
        res.json(responseFormatter(500, "Error", `${err}`));
      } else {
        crime_type = req.body.crime_type;
        connection.query(
          `SELECT crime_name FROM crime_type WHERE id = ${crime_type}`,
          (error, rows, fields) => {
            if (error) {
              console.error("Error executing query:", error);
              return;
            }

            let crime = rows[0].crime_name;
            let case_name = crime;
            let case_section = req.body.section;
            let case_pdf = null;
            let case_status = 0;
            let case_type = req.body.crime_type;
            connection.query(
              `INSERT INTO \`case_info\` (\`case_name\`, \`case_section\`, \`case_pdf\`, \`case_status\`, \`case_type\`) VALUES ('${case_name}', '${case_section}', '${case_pdf}', ${case_status}, ${case_type});`,
              (err, result) => {
                if (err) {
                  res.json(responseFormatter(500, "Error", `${err}`));
                } else {
                  res.json(
                    responseFormatter(
                      200,
                      "Success",
                      "FIR inserted successfully"
                    )
                  );
                }
              }
            );
          }
        );
      }
    }
  );
};

module.exports = {
  insertFir,
};
