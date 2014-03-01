'use strict';

var debug = require('debug')('shim:item'),
  request = require('../request');

exports.detail = function(req, res) {
  debug('requesting item detail');
  var url = 'http://us.battle.net/api/wow/item/' + req.params.itemId;

  request(url, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      res.send(body);
    }
  });
};
