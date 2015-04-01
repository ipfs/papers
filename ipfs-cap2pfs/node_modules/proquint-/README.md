# proquint

Convert buffers to and from the "proquint" pronouncable representation.

[![travis](https://travis-ci.org/dominictarr/pronounceable-binary.png?branch=master)
](https://travis-ci.org/dominictarr/pronounceable-binary)

[![testling](http://ci.testling.com/dominictarr/pronounceable-binary.png)
](http://ci.testling.com/dominictarr/pronounceable-binary)

I wrote this on the plane not realizing that @deoxxa already had written the npm module.
[proquint](https://github.com/deoxxa/proquint) except that his implementation is not
compliant to the spec, given 


## Examples

### 1. hash your public key

``` js
var crypto = require('crypto')
var fs = require('fs')

var pubkey = fs.readFileSync(process.env.HOME + '/.ssh/id_rsa.pub')
var hash = crypto.creatHash('sha256').update(pubkey).digest()

var proquint = require('proquint')
console.log(proquint.encode(hash))
```

running this script will generate 8 hyphenated words,
that are relatively easy to pronounce. Memorize this.
Get your friends and famility to address you by this name.

### 2. have your name legally changed.

I recommend having your name legally changed to your
proquint pronouncable hash. This strongly depends on the
the country you are geolocated within,
and is out of scope of this documentation.

### Variations

Proquints are a binary encoding intended for humans,
so there are a few ways of encoding proquints that
suit different ways that humans may want to use binary.

#### proquint.encode

`yabiv-huhaf fubar-kasom`.
lower case, seperated by a dash then a space.
(default)

### proquint.encodeCamelDash

`YabivHuhaf-FubarKasom`.
camel case, with a dash every second proquint.
Encoding without whitespace is easier to copy/paste
because you can usually select it with a double click.

### proquint.encodeCamel

`YabivHuhafFubarKasom`.
camel case, with no separator.

### proquint-encodeDashLoDash

`yabiv-huhaf_fubar-kasom`.
lower case, seperated by a dash then an underscore.

## License

MIT
