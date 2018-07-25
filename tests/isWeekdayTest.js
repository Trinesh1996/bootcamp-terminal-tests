let assert = require("assert");
let isWeekday = require("../isWeekday.js")


describe("isWeekday", function(){
  it('should return a specific day of the week', function(){
    assert.equal(isWeekday('Monday'), true);
  });

    it('returns a Weekend day', function(){
      assert.equal(isWeekday("Saturday"), false);
    });
});
