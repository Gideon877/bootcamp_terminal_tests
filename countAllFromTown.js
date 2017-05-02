module.exports = function countAllFromTown(regNo, regTown){
  var newRegNo = regNo.split(',');
  var fromTownReg = [];
  for (var i=0; i<newRegNo.length; i++){
    if (newRegNo[i].startsWith(regTown)){
      fromTownReg.push(newRegNo[i]);
    }
  }
  return fromTownReg;
};
