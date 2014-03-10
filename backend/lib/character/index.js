'use strict';

var debug = require('debug')('shim:character');
var request = require('../request');
var character = require('./database');

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

exports.findAll = function(req, res) {
  character.getAllProfiles().then(function(list) {
    res.json({characters: list});
  }).catch(function() {
    res.stats(400).json({status: 'something went wrong'});
  });
};

exports.findById = function(req, res) {
  var id = req.params.id;
  res.json({status: 'ok', id: id});
};

exports.create = function(req, res) {
  debug('name', req.params.name);
  character.newCharacter(req.params.name).then(function(name) {
    res.json({name: name});
    debug('fulfilled', name);
  }).catch(function() {
    res.status(400).json({status: 'something went wrong'});
  });
};

exports.update = function(req, res) {
  var id = req.params.id;
  res.json({status: 'ok', id: id});
};

exports.destroy = function(req, res) {
  var id = req.params.id;
  res.json({status: 'ok', id: id});
};
