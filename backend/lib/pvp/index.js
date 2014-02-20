'use strict';

var debug = require('debug')('shim:pvp'),
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
