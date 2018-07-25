module.exports = function (departo){
  var salesD = {};
  var departed = "";
  var num = 0;

  for (var i = 0; i<departo.length; i++){
    var depart = departo[i].day;

    if (salesD[depart] === undefined){
      	salesD[depart] = 0;
      }
    salesD[depart] += departo[i].sales;
 	//console.log(departo[i]);
  }
  for (var d in salesD){
    if (salesD[d] > num){
      num = salesD[d];
      departed = d;
    }
  }
  return departed;

}
