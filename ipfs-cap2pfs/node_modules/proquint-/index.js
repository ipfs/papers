var consonants = 'bdfghjklmnprstvz'
var CONSONANTS = consonants.toUpperCase()
var vowels = 'aiou'
var VOWELS = 'AIOU'

//    0 1 2 3 4 5 6 7 8 9 A B C D E F
//    b d f g h j k l m n p r s t v z
//    a i o u

var reverse = {}

for(var i in consonants)
  reverse[consonants[i]] = i
for(var i in vowels)
  reverse[vowels[i]] = i
for(var i in CONSONANTS)
  reverse[CONSONANTS[i]] = i
for(var i in VOWELS)
  reverse[VOWELS[i]] = i

exports.encode = toLetters
exports.decode = toBinary
exports.buffer = false

function toLetters (b, opts) {
  var fConsonant = opts && opts.camel ? CONSONANTS : consonants
  var join  = opts && opts.join  != null ? opts.join  : '-'
  var space = opts && opts.space != null ? opts.space : ' '

  var s = '', l = b.length, word = 0
  for(var i = 0; i < l; i += 2) {
    word = b[i] << 8 | b[i + 1]

    s += (!i ? '' : i%4 ? join : space)
      + fConsonant[word >> 12 & 0xF]
      + vowels    [word >> 10 & 0x3]
      + consonants[word >>  6 & 0xF]
      + vowels    [word >>  4 & 0x3]
      + consonants[word       & 0xF]

  }
  return s
}

function toBinary (s) {
  s = s.replace(/[-_\s]*/g, '')
  var b = new Buffer((s.length / 5) * 2)

  var i = 0, l = s.length, w = 0, word = 0
  for(var i =0; i < l; i += 5) {
    word = reverse[s[i]]   << 12
         | reverse[s[i+1]] << 10
         | reverse[s[i+2]] <<  6
         | reverse[s[i+3]] <<  4
         | reverse[s[i+4]]

    b[w++] = word >> 8
    b[w++] = word & 0xff
  }
  return b
}

exports.encodeCamelDash = function (b) {
  return toLetters(b, {camel: true, join: '', space: '-'})
}

exports.encodeCamel = function (b) {
  return toLetters(b, {camel: true, join: '', space: ''})
}

exports.encodeDashLoDash = function (b) {
  return toLetters(b, {join: '-', space: '_'})
}
