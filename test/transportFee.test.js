const assert = require('assert');
const transportFee = require('../transportFee');

describe('transportFee function', function(){
  it('should returns R20 for morning shift', function(){
    assert.equal(transportFee('morning'), 'R20')
  })

  it('should returns R20 for afternoon shift', function(){
    assert.equal(transportFee('afternoon'), 'R10')
  })

  it('should returns free for nightshift', function(){
    assert.equal(transportFee('nightshift'), 'free')
  })
})
