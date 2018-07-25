let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill.js")



describe("totalPhoneBill.", function(){
  it("returns call price for 1 call made", function(){
    assert.equal(totalPhoneBill("call"), "R2.75");
  });

  it("returns call price for 2 calls made", function(){
    assert.equal(totalPhoneBill("call, call"), "R5.50");
  });


it("returns sms price for 1 sms", function(){
    assert.equal(totalPhoneBill("sms"), "R0.65");
  });

  it("returns sms price for 2 sms", function(){
      assert.equal(totalPhoneBill("sms, sms"), "R1.30");
    });

    it("returns sms price for 3 sms", function(){
      assert.equal(totalPhoneBill("sms, sms, sms"), "R1.95");
    });

    it("returns total price for data used", function(){
      assert.equal(totalPhoneBill("sms, sms, sms, call, call"), "R7.45");
    });

});
