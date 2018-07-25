let assert = require("assert");
let findItemsOver20 = require("../findItemsOver20.js")


describe("findItemsOver20", function(){
  it("returns items that are greater than 20", function(){
    var itemList = [
      {name : 'apples', qty : 10},
      {name : 'pears', qty : 37},
      {name : 'bananas', qty : 27},
      {name : 'apples', qty : 3},

    ];

    assert.deepEqual(findItemsOver20(itemList), 2);
  });


  it("returns items that are less than 20", function(){
    var itemList2 = [
      {name : 'apples', qty : 10},
      {name : 'pears', qty : 7},
      {name : 'bananas', qty : 7},
      {name : 'apples', qty : 3},
      {name : 'pear', qty : 4}
    ];

    assert.deepEqual(findItemsOver20(itemList2), 0);
  });

  it("returns items that are less than 20", function(){
    var itemList2 = [
      {name : 'apples', qty : 10},
      {name : 'pears', qty : 7},
      {name : 'bananas', qty : 7},
      {name : 'apples', qty : 3},
      {name : 'pear', qty : 4}
    ];

    assert.deepEqual(findItemsOver20(itemList2), 0);
  });

  it("returns null for no items within list", function(){
    var itemList2 = [];
    assert.deepEqual(findItemsOver20(itemList2), 0);
  });
});
