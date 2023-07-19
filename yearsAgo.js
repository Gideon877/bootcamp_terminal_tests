export default function (year) {
  var yearCheck = new Date();
  var fullYr = yearCheck.getFullYear(); // Get current Year
  var result = fullYr - year // Subtract given Year to Current Year
  return result;
};
