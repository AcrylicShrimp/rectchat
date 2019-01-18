
const express = require('express');

const application = express();

application.use(require('./http/middleware'));
application.use((req, res, next) => {
	res.status(404).end();
});
application.use((err, req, res, next) => {
	console.trace(err);
	res.status(500).end();
});

module.exports = application;