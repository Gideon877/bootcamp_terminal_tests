module.exports = function countAllPaarl(regNo){
  var newRegNo = regNo.split(',');
  var paarlReg = [];
  for (var i=0; i<newRegNo.length; i++){
    if (newRegNo[i].startsWith('CJ')){
      paarlReg.push(newRegNo[i])
    }
  }
  return paarlReg;
};
