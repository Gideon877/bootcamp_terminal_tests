module.exports = function regCheck(reg, location) {
  var loc = reg.endsWith(location);
  console.log(reg + ' is from '+ location);
  return loc;
}
// var result=regCheck('CY189-012', 'ND');
// console.log(result);
