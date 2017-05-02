module.exports = function totalPhoneBill(callAndSms) {
    var totalCost = callAndSms.split(',');
    var callCost = [];
    var smsCost = [];
    for (var i = 0; i < totalCost.length; i++) {
        var totalCost2 = totalCost[i].trim();
        if (totalCost2 == 'call') {
            callCost.push(totalCost2);
        } else if (totalCost2 == 'sms') {
            smsCost.push(totalCost2);
        }
    }
    var total = (0.65 * (smsCost.length)) + (2.75 * (callCost.length));
    var total2 = 'R' + total.toFixed(2);
    console.log('total ' + total2);
    return total2;
}
