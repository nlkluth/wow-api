'use strict';

var debug = require('debug')('shim:guild'),
  request = require('../request');

exports.detail = function(req, res) {
  debug('requesting guild detail');
  var url = 'http://us.battle.net/api/wow/guild/' + req.params.realm + '/' + req.params.name;

  request(url, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      res.send(body);
    }
  });
};
