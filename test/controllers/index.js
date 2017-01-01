'use strict';

let server = undefined;

module.exports = function () {
	beforeEach(function () {
		server = require('../../server/server.js');
	});
	afterEach(function () {
		server.close();
	});
};