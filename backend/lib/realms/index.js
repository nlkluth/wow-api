'use strict';

var debug = require('debug')('shim:realms'),
  request = require('../request');

exports.list = function(req, res) {
  debug('requesting list'); //TODO: cache servers list
  var url = 'http://us.battle.net/api/wow/realm/status';

  if (req.query.realms) {
    url = url + '?realms=' + req.query.realms;
  }

  request(url, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      res.send(body);
    }
  });
};
