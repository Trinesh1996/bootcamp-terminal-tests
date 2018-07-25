let assert = require("assert");
let countRegNumber = require("../countRegNumber.js")


describe("countRegNumber", function(){
  it('returns 3 registration numbers in the string for countRegNumber', function(){
    assert.equal(countRegNumber('CA 182736, CY 523519, CJ 812328'), 3);
  });

    it('returns 4 registration numbers in the string for countRegNumber', function(){
      assert.equal(countRegNumber('CA 182736, CY 523519, CJ 812328,CJ 812328'), 4);
});

});
