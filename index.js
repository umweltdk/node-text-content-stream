'use strict';

var stream = require('stream');
var util = require('util');

function LabelStream(options) {
	if (!(this instanceof LabelStream)) {return new LabelStream(options);}
  this.element = options.element;

  stream.Writable.call(this, options);
}
util.inherits(LabelStream, stream.Writable);


//In label-steam.js module
LabelStream.prototype._write = function(chunk, enc, cb) {
  this.element.textContent = chunk.toString();

  cb();
};

module.exports = LabelStream;
