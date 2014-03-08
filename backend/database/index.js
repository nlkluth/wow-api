'use strict';

var mongoose = require('mongoose');
var debug = require('debug')('shim:database');

mongoose.connect('mongodb://localhost/wow');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  debug('open database connection');
});

module.exports = db;
