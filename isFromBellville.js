module.exports = function isFromBellville(regNo) {
    var isFB = regNo.startsWith('CY');
    var notFB = !regNo.startsWith('CY');
    return isFB;
}
