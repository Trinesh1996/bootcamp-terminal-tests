let assert = require("assert");
let transportFee = require("../transportFee.js")



describe("transportFee", function(){
  it("transportFee should equal R20 for morning shift", function(){
    assert.equal(transportFee("morning"), "R20");
  });

  it("transportFee should equal R10 for the afternoon shift", function(){
    assert.equal(transportFee("afternoon"), "R10");
  });

  it("transportFee should equal free for night shift", function(){
    assert.equal(transportFee("night"), "free");
  });
});
