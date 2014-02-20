'use strict';

var debug = require('debug')('shim:realms'),
  request = require('../request');

exports.list = function(req, res) {
  debug('requesting list');

  request('http://us.battle.net/api/wow/realm/status', function (error, response, body) {
    if (!error && response.statusCode === 200) {
      res.send(body);
    }
  });
};
