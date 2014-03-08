'use strict';

var debug = require('debug')('shim:guild');
var request = require('../request');

exports.detail = function(req, res) {
  debug('requesting guild detail');
  var url = 'http://us.battle.net/api/wow/guild/' + req.params.realm + '/' + req.params.name;

  if (req.query.fields) {
    url = url + '?fields=' + req.query.fields;
  }

  request(url, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      res.send(body);
    }
  });
};
