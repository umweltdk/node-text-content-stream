/*eslint no-underscore-dangle: 0*/
'use strict';
var stream = require('readable-stream');
var util = require('util');

util.inherits(TextContentStream, stream.Writable);
function TextContentStream(options) {
  if (!(this instanceof TextContentStream)) return new TextContentStream(options);

  this.element = options.element;

  stream.Writable.call(this, this.options);
}

TextContentStream.prototype._write = function(chunk, enc, cb) {
  this.element.textContent = chunk.toString();
  cb();
};

module.exports = TextContentStream;
