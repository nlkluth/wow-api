'use strict';

var mongoose = require('mongoose');
var debug = require('debug')('shim:character');
var Promise = require('bluebird');

var characterSchema = mongoose.Schema({
  name: String
});
var Character = mongoose.model('Character', characterSchema);

exports.newProfile = function(name) {
  debug('creating character');
  var newCharacter = new Character({name: name});

  var promise = new Promise(function(resolve, reject) {
    newCharacter.save(function (err, name) {
      if (err) {
        return reject(err);
      }
      return resolve(name);
    });
  });

  return promise;
};

exports.getAllProfiles = function() {
  var promise = new Promise(function(resolve, reject) {
    Character.find(function (err, characters) {
      if (err) {
        return reject(err);
      }
      debug('character', characters);
      return resolve(characters);
    });
  });

  return promise;
};

exports.getProfileById = function(id) {
  var promise = new Promise(function(resolve, reject) {
    Character.findById(id, function(err, character) {
      if (err) {
        return reject(err);
      }
      return resolve(character);
    });
  });

  return promise;
};

exports.updateProfileById = function(id) {
  var promise = new Promise(function(resolve, reject) {
    Character.findByIdAndUpdate(id, function(err, character) {
      if (err) {
        return reject(err);
      }
      return resolve(character);
    });
  });

  return promise;
};

exports.destroyProfile = function(id) {
  var promise = new Promise(function(resolve, reject) {
    Character.findByIdAndRemove(id, function(err, character) {
      if (err) {
        return reject(err);
      }
      return resolve(character);
    });
  });

  return promise;
};
