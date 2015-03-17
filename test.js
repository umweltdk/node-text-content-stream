/*eslint no-underscore-dangle: 0*/
'use strict';
var stream = require('stream');
var test = require('tape');
var document = require('global/document');

var textContentStream = require('./index');

test('updates text', function(t) {
  var elm = document.createElement('span');

  var ctn = 0;
  var ctnStream = new stream.Readable({highWaterMark: 0});
  ctnStream._read = function() {
    ctn++;
    if(ctn > 10) return this.push(null);
    return this.push('' + ctn);
  };

  var destStream = textContentStream({element: elm});
  destStream.on('error', t.error);
  destStream.on('finish', t.end);

  ctnStream.pipe(destStream);
  ctnStream.on('data', function(chunk) {
    t.equal(elm.textContent, chnk.toString(), 'check element is updated');
  });
});
