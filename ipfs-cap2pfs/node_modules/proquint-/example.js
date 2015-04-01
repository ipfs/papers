var proquint = require('./')
var crypto = require('crypto')
var fs = require('fs')

var pubkey = fs.readFileSync(process.env.HOME + '/.ssh/id_rsa.pub')
var hash = crypto.createHash('sha256').update(pubkey).digest()


console.log(proquint.encode(hash))


