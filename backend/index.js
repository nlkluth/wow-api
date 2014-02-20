var express = require('express');
var debug = require('debug')('shim:server');
var api = express();

var port = process.env.PORT || 3000;

/** Configuration **/


/** Routing **/
var realms = require('./lib/realms');

api.get('/realms', realms.list);

api.listen(port);
debug('Listening on %d', port);
