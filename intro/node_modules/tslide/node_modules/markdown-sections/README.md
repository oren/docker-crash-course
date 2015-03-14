# markdown-sections

split a markdown file into \#sections

## Status

Frozen - expect only bug fixes, no api changes or new features.

## Example

```
var sections = require('markdown-sections')
var fs       = require('fs')

var a = sections(fs.readFileSync('./README.MD'))

a.forEach(console.log)

```

## License

MIT
