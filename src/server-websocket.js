
'use strict';

const http     = require('http');
const socketIO = require('socket.io');

const httpServer = http.createServer();

require('./handler-websocket')(socketIO(httpServer));

module.exports = httpServer;