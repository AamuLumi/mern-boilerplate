'use strict';

let fs = require('fs');
let async = require('async');
let mongoose = require('mongoose');

function loadModelsAndRemoveDocuments(callback) {
	let files = fs.readdirSync('server/entities');

	async.forEach(files, function (file, done) {
		let fileAbsPath = 'server/entities/' + file;

		if (fs.statSync(fileAbsPath).isFile()) {
			return done();
		}

		require(fileAbsPath + '/' + file + '.model.js').remove({}, done);
	}, callback);
}


function runTests(name, tests) {
	describe(name, function () {
		after(function (done) {
			/* Drop all documents */
			loadModelsAndRemoveDocuments(done);
		});

		tests();
	});
}

describe('XXX - Test API', function () {
	runTests('Controllers', require('./controllers'));
	runTests('Routes', require('./routes'));
});

