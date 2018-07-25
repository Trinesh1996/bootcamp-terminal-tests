module.exports = function(reg){
  var paarl = [];
  var pReg = reg.split(", ");
  for (var i=0; i<pReg.length; i++){
    var regNum = pReg[i];
    if (regNum.startsWith("CJ")){
      paarl.push(regNum);
    }
  }return paarl.length;
}