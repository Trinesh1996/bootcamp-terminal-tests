module.exports = function (tot){
  var totSplit = tot.split(", ");
  var total = 0;
  var sms = 0;
  var call = 0;

  for(var i=0; i<totSplit.length; i++){
    if(totSplit[i].startsWith("s")){
       sms = sms+1;
          }
    else{
      call=call+1;
    }
  };
total = call*2.75 + sms*0.65;
return 'R'+total.toFixed(2);
};
