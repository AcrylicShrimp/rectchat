
'use strict';

const http = require('http');

module.exports = http.createServer(require('./handler-http'));