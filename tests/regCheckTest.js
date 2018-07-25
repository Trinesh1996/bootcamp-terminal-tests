let assert = require("assert");
let regCheck = require("../regCheck")


describe("regCheck", function(){
  it('regCheck should verify the registation as true or false depending on location', function(){
    assert.equal(regCheck("CA 123 GP", "GP"), true);
  });

});
