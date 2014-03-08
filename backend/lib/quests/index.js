'use strict';

var debug = require('debug')('shim:quest');
var request = require('../request');

exports.detail = function(req, res) {
  debug('requesting quest detail');
  var url = 'http://us.battle.net/api/wow/quest/' + req.params.id;

  request(url, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      res.send(body);
    }
  });
};
