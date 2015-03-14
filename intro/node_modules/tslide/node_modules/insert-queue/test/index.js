var iq = require('..')
var assert = require('assert')

var s = 'this is a string'

var q = iq(s)

//should toString back to the string
assert.equal(s, q.toString())
q.insertAfter(10, 'Happy ')

assert.equal(q.apply(), 'this is a Happy string')

//before
q.insertBefore(10, 'VERY ')

assert.equal(q.apply(), 'this is a VERY Happy string')

//okay, so I got before order by default...

//after
q.insertAfter(10, 'test ')

assert.equal(q.apply(), 'this is a VERY Happy test string')

q.wrap(/string/, '<', '>')
console.error(q.queue)
assert.equal(q.apply(), 'this is a VERY Happy test <string>')
