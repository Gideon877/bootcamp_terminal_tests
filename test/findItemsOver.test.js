const assert = require('assert');
const findItemsOver = require('../findItemsOver');
var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];

describe ('findItemsOver function', function(){
  it('print all items price over 15', function(){
    assert.deepEqual(findItemsOver(itemList, 15),[ { name: 'pears', qty: 37 }, { name: 'bananas', qty: 27 } ])
  })
})
