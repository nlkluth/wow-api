var express = require('express');
var debug = require('debug')('shim:server');
var api = express();

var port = process.env.PORT || 3000;

/** Configuration **/


/** Routing **/
var realms = require('./lib/realms'),
  character = require('./lib/character'),
  guild = require('./lib/guild');

api.get('/api/realms', realms.list);
api.get('/api/pvp/:bracket', character.list);
api.get('/api/character/:realm/:name', character.detail);
api.get('/api/guild/:realm/:name', guild.detail);

api.listen(port);
debug('Listening on %d', port);
