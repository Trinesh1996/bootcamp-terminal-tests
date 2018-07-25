module.exports = function (p){
  var fullyear = new Date();
  var a = fullyear.getFullYear();
  var b = a - p;
  return b;

};

