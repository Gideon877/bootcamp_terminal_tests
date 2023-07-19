import assert from "assert";
import findItemsOver20 from "../findItemsOver20.js";

var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];

describe ('findItemsOver20 function', function(){
  it('print all items price over 20', function(){
    assert.deepEqual(findItemsOver20(itemList),[ { name: 'pears', qty: 37 }, { name: 'bananas', qty: 27 } ])
  })
})
