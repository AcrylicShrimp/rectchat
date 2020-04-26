'use strict';

const User = require('./chat/user');

module.exports = class ChatServer {
	constructor(io) {
		this.sockets = [];
		this.socketUserMap = {};
		this.users = [];
		this.userMap = {};

		io.on('connection', (socket) => {
			this.sockets.push(socket);

			socket.on('enter', (name) => {
				if (socket in this.socketUserMap.keys()) return;
				if (name in this.userMap.keys()) return;

				const user = new User(name, socket);
				this.socketUserMap[socket] = user;
				this.users.push(user);
				this.userMap[name] = user;

				socket.broadcast.emit('enter', {
					name: name,
					position: {
						x: user.x,
						y: user.y
					}
				});
				socket.emit('user', {
					users: this.users.map((user) => {
						return { name: user.name, x: user.x, y: user.y };
					})
				});
			});
			socket.on('disconnect', () => {
				const user = this.socketUserMap[socket];

				if (user) {
					this.users.splice(
						this.users.findIndex((u) => u === user),
						1
					);
					delete this.userMap[user.name];
				}

				this.sockets.splice(
					this.socket.findIndex((s) => s === socket),
					1
				);
				delete this.socketUserMap[socket];
			});
		});
	}
};
