/*eslint no-underscore-dangle: 0*/
'use strict';
var test = require('tape');
var document = require('global/document');

var textContentStream = require('./index');

test('updates text', function(t) {
  var elm = document.createElement('span');

  var destStream = textContentStream({element: elm});
  destStream.on('error', t.error);
  destStream.on('finish', t.end);

  for(var i = 10; i--; )
    destStream.write('' + i, 'utf8', assertWrite('' + i));

  destStream.end();

  function assertWrite(chunk) {
    return function(err) {
      t.error(err, 'write didn\'t fail');
      t.equal(elm.textContent, chunk, 'check element is updated');
    };
  }
});
