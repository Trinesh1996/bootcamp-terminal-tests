let assert = require("assert");
let  isFromBellville = require("../isFromBellville.js")



describe("isFromBellville", function(){
  it('returns registration number for bellville CY', function(){
    assert.equal(isFromBellville("CY 123"), true );
  });
  it('registration number CA is not a bellville registration number', function(){
    assert.equal(isFromBellville("CA 123"), false);

});

});
