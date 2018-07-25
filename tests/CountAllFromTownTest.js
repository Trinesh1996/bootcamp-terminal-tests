let assert = require("assert");
let countAllFromTown = require("../countAllFromTown.js")


describe("countAllFromTown", function(){

  it('returns number of registration numbers in the string for Bellville.', function(){
    var fromBellville = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CY');
    assert.deepEqual(fromBellville, 1);
  });

  it('returns number of registration numbers in the string for Stellenbosch.', function(){
    var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
    assert.deepEqual(fromStellies, 3);
  });

});
