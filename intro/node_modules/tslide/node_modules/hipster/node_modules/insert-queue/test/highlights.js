var assert = require('assert')
var iq = require('..')


// c/p from http://github.com/Marak/colors.js
// thx Marak !

var styles = {

    //styles
    'bold' : ['\033[1m', '\033[22m'],
    'italic' : ['\033[3m', '\033[23m'],
    'underline' : ['\033[4m', '\033[24m'],
    'inverse' : ['\033[7m', '\033[27m'],

    //grayscale
    'white' : ['\033[37m', '\033[39m'],
    'grey' : ['\033[90m', '\033[39m'],
    'black' : ['\033[30m', '\033[39m'],

    //colors
    'blue' : ['\033[34m', '\033[39m'],
    'cyan' : ['\033[36m', '\033[39m'],
    'green' : ['\033[32m', '\033[39m'],
    'magenta' : ['\033[35m', '\033[39m'],
    'red' : ['\033[31m', '\033[39m'],
    'yellow' : ['\033[33m', '\033[39m']
  };

function highlightMe (arg) {
  if(something == 'string') {
    //whatever
    return arg + 1
  } else {
    var x = 3.204e425462
    var y = 3
    /*
    var z = 342e-423
      function (eooeuoau....;
    */
    var m = /parse/g.test(arg)
    return m && m[0]
  }
}

var q = iq('' + highlightMe)
  q.wrap(/function|if|return/g, styles.cyan)
  q.wrap(/[\(\)]/g, styles.yellow)
  q.wrap(/[\{\}]/g, styles.magenta)
  q.wrap(/'[^']*'/g, styles.red)
  q.wrap(/[+-/!~%^&=|:]/g, styles.bold)
  q.wrap(/-?\d+(?:\.\d+)?(?:e-?\d+)?/g, styles.green)
  q.wrap(/\/\/[^\n]*/g, styles.underline)
  //q.wrap(/\/[^\/]*\/[gimy]*/, styles.red)
  q.wrap(/\/\*(.|\n)*\*\//g, styles.underline)


console.log(q.queue)
//the items on the queue MUST be in order.

var max = 0

q.queue.forEach(function (s) {
  assert.ok(s[0] >= max)
  max = s[0]
})

console.log(q.apply())
