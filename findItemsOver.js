module.exports = function (itemList){
  var result = [];
  var threshold = 30;
  for (var i = 0; i<itemList.length; i++){
    var list = itemList[i];
    if (list.qty > threshold){
      result.push(list);
    }
  }return result.length;
}
