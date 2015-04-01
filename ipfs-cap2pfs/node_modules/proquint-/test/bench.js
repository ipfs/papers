var proquint = require('../')

var crypto = require('crypto')



var start = Date.now()
var str = proquint.encode(crypto.randomBytes(1024*1024))
console.log('encode time', Date.now() - start)
start = Date.now()
var str = proquint.decode(str)
console.log('decode time', Date.now() - start)

