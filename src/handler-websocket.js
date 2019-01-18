
'use strict';

module.exports = websocketServer => {
	websocketServer.on('connection', socket => {
		socket.emit('greeding', {
			message: 'Hello, world!'
		});
		socket.close();
	});
};