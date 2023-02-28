//Function to format the API response
const responseFormatter = (status, data, message) => {
  const res = { status, data, message };
  return res;
};

// Calculates the age of the user
function calculateAge(dob) {
  let birthdate = new Date(dob);
  let diff_ms = Date.now() - birthdate.getTime();
  let age_date = new Date(diff_ms);
  return Math.abs(age_date.getUTCFullYear() - 1970);
}

module.exports = {
  responseFormatter,
  calculateAge,
};
