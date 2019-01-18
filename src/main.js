
'use strict';

const httpPort      = process.env.HTTPPORT || 80;
const websocketPort = process.env.WEBSOCKETPORT || 13500;

require('./server-websocket').listen(websocketPort, () => {
	console.log(`The websocket server is running on port ${websocketPort}.`);

	require('./server-http').listen(httpPort, () => {
		console.log(`The HTTP server is running on port ${httpPort}.`);
	});
});