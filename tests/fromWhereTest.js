let assert = require("assert");
let fromWhere = require("../fromWhere.js")



describe("fromWhere", function(){
  it("returns car registration number for Bellville", function(){
    assert.equal(fromWhere("CY 43434 m434"), "Bellville");
  });

    it("returns car registration number for Paarl", function(){
    assert.equal(fromWhere("CJ 43434 m434"), "Paarl");
  });
    it("returns car registration number for Cape Town", function(){
    assert.equal(fromWhere("CA 43434 m434"), "Cape Town");
  });
});
