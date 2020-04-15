'use strict';

const http = require('http');

const app = require('./application');
const io = require('./io');

const server = io.attach(http.createServer(app));

server.listen(8000, () => console.log('HTTP server is running on port 8000.'));
