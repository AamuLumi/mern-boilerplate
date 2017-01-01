'use strict';

let request = require('supertest');
let server = undefined;

module.exports = function () {
	describe('POST /login', function () {
		beforeEach(function () {
			server = require('../../server/server.js');
		});
		afterEach(function () {
			server.close();
		});

		it('should need an email', function (done) {
			request(server)
				.post('/api/login')
				.expect(400, done);
		});
	});
};
