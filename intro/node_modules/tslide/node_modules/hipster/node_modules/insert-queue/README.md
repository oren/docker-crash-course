# insert-queue

Setup a series of inserts on a string, but without altering it (yet)
then apply all the inserts without them interfeering with each other.

this is very useful if you want to check multiple regexps against a string
and wrap those words...

I intend to use this to implement Syntax Highlighting in 
[Hipster](https://github.com/dominictarr/hipster)

## Example

`insert-queue` can beused to insert multiple strings into another string,


``` js
var iq = require( 'insert-queue' )
var q = iq('a string to do insertions on')
q.wrap(/.*/, ['<p>', '</p>'])
q.wrap(/string/, ['<i>', '</i>'])
console.log(q.apply)

// '<p>a <i>string</i> to do insertions on</i>'
```

## Methods

### wrap (regexpy, around)

Wrap occurances of regexpy with around.

If around is a string, it will be inserted before and after matches of `regexpy`.
If `regexpy` is global (`/.../g`) all matches will be replaced. Otherwise only the first
occurance will be replaced.

Note: `regexpy` doesn't _have_ to be a `RegExp`. It just needs a `exec` method, 
and to set `global = true` if it can produce multiple matches 
(and must use a `lastIndex` property like a regexp)

In this way you can implement your own ad-hock look behind, etc.

### insertBefore(index, string)

Queue `string` to be inserted at index, ahead of anything currently queued at `index`.

### insertAfter(index, string)

Queue `string` to be inserted at index, behind anything currently queued at `index`.

## License

MIT
