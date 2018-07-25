let assert = require("assert");
let findItemsOver = require("../findItemsOver")



describe("findItemsOver", function(){
  it("returns items that are greater than threshold", function(){
    var itemList = [
      {name : 'apples', qty : 10},
      {name : 'pears', qty : 37},
      {name : 'bananas', qty : 27},
      {name : 'apples', qty : 3},

    ];

    assert.deepEqual(findItemsOver(itemList), 1);
  });


  it("returns items that are less than threshold", function(){
    var itemList2 = [
      {name : 'apples', qty : 10},
      {name : 'pears', qty : 7},
      {name : 'bananas', qty : 7},
      {name : 'apples', qty : 3},
      {name : 'pear', qty : 4}
    ];

    assert.deepEqual(findItemsOver(itemList2), 0);
  });


  it("returns null for no items within list", function(){
    var itemList3 = [];
    assert.deepEqual(findItemsOver(itemList3), 0);
  });
});
