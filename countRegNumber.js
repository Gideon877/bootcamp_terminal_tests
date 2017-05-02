module.exports  = function countRegNumber(regNumber){
  var regCount = regNumber.split(",");
  console.log(regCount.length);
  return regCount.length;
}
