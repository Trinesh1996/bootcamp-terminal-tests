module.exports =  function(reg,s){
  var town = [];
  var tReg = reg.split(",");
  for (var i=0; i<tReg.length; i++){
    var newReg = tReg[i];
    if (newReg.startsWith(s)){
      town.push(newReg);
    }
  }return town.length;
}

