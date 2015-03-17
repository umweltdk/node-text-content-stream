/*eslint no-underscore-dangle: 0*/
'use strict';
var stream = require('readable-stream');
var util = require('util');
var raf = require('raf');

util.inherits(TextContentStream, stream.Writable);
function TextContentStream(options) {
  if (!(this instanceof TextContentStream)) return new TextContentStream(options);

  this.element = options.element;

  stream.Writable.call(this, options);
}

TextContentStream.prototype._write = function(chunk, enc, cb) {
  raf(function() {
    this.element.textContent = chunk.toString();
    cb();
  }.bind(this));
};

module.exports = TextContentStream;
