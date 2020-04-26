'use strict';

module.exports = class User {
	constructor(name, socket) {
		this.name = name;
		this.socket = socket;
		this.x = 0;
		this.y = 0;

		this.socket.on('pos', (pos) => {
			this.x = pos.x;
			this.y = pos.y;
			this.socket.broadcast.emit('pos', pos);
		});
		this.socket.on('msg', (message) => {
			this.socket.broadcast.emit('msg', {
				from: this.name,
				message: message
			});
		});
	}

	sendMessage(from, message) {
		this.socket.emit('msg', {
			from: from,
			messsage: message
		});
	}
};
