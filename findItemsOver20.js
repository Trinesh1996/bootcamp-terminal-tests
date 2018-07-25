module.exports = function (itemList){
  var results = [];
  for (var i = 0; i<itemList.length; i++){
    var list = itemList[i];
    if (list.qty > 20){
      results.push(list);
    }
  }return results.length;
}
