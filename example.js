/*eslint no-underscore-dangle: 0*/
'use strict';
var stream = require('stream');

var dataStream = new stream.Readable();
dataStream._read = function() {
  this.push('' + Math.random());
};



var document = require('global/document');
var textContentStream = require('./index');

var elm = document.createElement('span');

dataStream.pipe(textContentStream({element: elm}));
document.body.appendChild(elm);
