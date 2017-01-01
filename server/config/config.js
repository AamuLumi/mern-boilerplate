'use strict';

let path = require('path'),
	rootPath = path.normalize(__dirname + '/..'),
	env = process.env.NODE_ENV || 'development';

let config = {
	development: {
		root: rootPath,
		app: {
			name: 'xxx-api-dev'
		},
		port: 15400,
		secret: 'development-session-xxx'
	},

	test: {
		root: rootPath,
		app: {
			name: 'xxx-api-test'
		},
		port: 15400,
		secret: 'test-session-xxx'
	},

	production: {
		root: rootPath,
		app: {
			name: 'xxx-api'
		},
		port: 15400,
		secret: 'prod-session-xxx'
	}
};

module.exports = config[env];