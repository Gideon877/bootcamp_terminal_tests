module.exports = function findItemsOver(itemList, quantity) {
    var empty = [];
    for (var i = 0; i < itemList.length; i++) {
        var listItem = itemList[i];
        var qty = listItem.qty;
        if (qty > quantity) {
            empty.push(listItem);
        }
    }
    return empty;
};

var itemList = [{
        name: 'apples',
        qty: 10
    },
    {
        name: 'pears',
        qty: 37
    },
    {
        name: 'bananas',
        qty: 27
    },
    {
        name: 'apples',
        qty: 3
    },
];
