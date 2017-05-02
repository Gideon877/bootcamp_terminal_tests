const assert = require('assert');
const totalPhoneBill = require('../totalPhoneBill');

describe ('totalPhoneBill function', function(){
  it("calculate the total phone bill of calls and sms's sent", function(){
    assert.equal(totalPhoneBill('call, sms, call, sms, sms'), 'R7.45')
  });
});
