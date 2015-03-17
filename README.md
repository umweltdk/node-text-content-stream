text-content-stream [![Build Status][1]][2]
=======================================
[![NPM][3]][4]

Pipe a stream into a HTML element, overwriting textContent with the latest chunk.
A new animation frame is requested on each write as to not choke the browser.

Usage
-----

```js
var textContentStream = require('text-content-stream');

someSourceStream.pipe(textContentStream({
  element: document.querySelector('#label')
}));
```

License
-------
> Copyright (c) 2015, Umwelt A/S
>
> Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.
>
> THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

  [1]: https://travis-ci.org/umweltdk/node-text-content-stream.svg
  [2]: https://travis-ci.org/umweltdk/node-text-content-stream
  [3]: https://nodei.co/npm/text-content-stream.png?downloads=true
  [4]: https://nodei.co/npm/text-content-stream/
