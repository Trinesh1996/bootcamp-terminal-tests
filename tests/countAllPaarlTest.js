let assert = require("assert");
let countAllPaarl = require("../countAllPaarl.js")

describe("countAllPaarl", function(){
  it('CountAllPaarl should return the 4 registration numbers', function(){
    assert.equal(4, countAllPaarl("CJ 345 123, CJ 2345, CJ 123-546, CK 345, CJ 123"));
  });

  it('CountAllPaarl should return the 5 registration numbers', function(){
    assert.equal(5, countAllPaarl("CJ 345 123, CJ 2345, CJ 123-546, CK 345, CJ 123, CJ 342"));
  });

});
