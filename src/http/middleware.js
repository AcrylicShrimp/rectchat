
'use strict';

const compression = require('compression');
const helmet      = require('helmet');

module.exports = [
	helmet(),
	compression()
];