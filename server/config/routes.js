'use strict';

let Errors = require('../tools/routes/errors');
let express = require('express');
let fs = require('fs');

module.exports = function (app, config) {
	let files = fs.readdirSync(config.root + '/entities');
	let absolutePath = undefined;

	// For each DB entity
	for (let file of files) {
		absolutePath = config.root + '/entities/' + file;

		if (fs.statSync(absolutePath).isFile()) {
			continue;
		}

		require(absolutePath + '/' + file + '.model');

		// Load routes
		app.use('/api/' + file, require(absolutePath + '/' + file + '.route'));
	}

	// Load Auth API
	app.use('/api/', require('../tools/routes/auth'));

	// All api/something go on 404 error if not found
	app.route('/api/*').get(Errors[404]);

	// Default route
	app.use('/dist', express.static(config.root + '/../app/dist'));
	app.use('/src', express.static(config.root + '/../app/src'));
	app.use('/*', express.static(config.root + '/../app'));
};