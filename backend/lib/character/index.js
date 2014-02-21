'use strict';

var debug = require('debug')('shim:character'),
  request = require('../request');

exports.list = function(req, res) {
  debug('requesting list');
  var url = 'http://us.battle.net/api/wow/leaderboard/' + req.params.bracket;

  request(url, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      res.send(body);
    }
  });
};

exports.detail = function(req, res) { //TODO: dry it up
  debug('requesting detail');
  var url = 'http://us.battle.net/api/wow/character/' + req.params.realm + '/' + req.params.name;

  if (req.query.fields) {
    url = url + '?fields=' + req.query.fields;
  }

  request(url, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      res.send(body);
    }
  });
};
