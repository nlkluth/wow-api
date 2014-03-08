'use strict';

var mongoose = require('mongoose');
var debug = require('debug')('shim:database');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  debug('open database connection');
});

exports.init = function() {
  mongoose.connect('mongodb://localhost/wow');
};
