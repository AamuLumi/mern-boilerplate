'use strict';

let codes = {
	success: 1,
	notLogged: -1,
	notAdmin: -2,
	notMember: -3,
	notOwner: -4,
	notAllowed: -5,
	/* -11 to -19 reserved for missing */
	alreadyExist: -21,
	notFound: -22,
	serverError: -23,
	badLogin: -24,
	editError: -26,
	selectError: -27,
	deleteError: -28,
	insertError: -29,
	invalidID: -31,
	invalidParameter: -32,
	surveyClosed: -41,
	tooManyItems: -42,
	resourceNotFound: -43,
	authenticationFailed: -51,
	notHaveRights: -52
};

let mongoCodes = {
	alreadyExist: 11000
};

function sendResponse(res, httpCode, data) {
	res.type('json').status(httpCode).send(data);
}

function success(res, message, data) {
	sendResponse(res, 200, {
		message: message,
		data: data,
		success: codes.success
	});
}

function notLogged(res) {
	sendResponse(res, 401, {
		message: 'Error : Not logged',
		data: null,
		success: codes.notLogged
	});
}

function notAdmin(res) {
	sendResponse(res, 403, {
		message: 'Error : You\'re not an admin',
		data: null,
		success: codes.notAdmin
	});
}

function notMember(res) {
	sendResponse(res, 403, {
		message: 'Error : You\'re not a member',
		data: null,
		success: codes.notMember
	});
}

function notOwner(res) {
	sendResponse(res, 403, {
		message: 'Error : You\'re not the owner',
		data: null,
		success: codes.notOwner
	});
}

function notAllowed(res) {
	sendResponse(res, 403, {
		message: 'Error : You\'re not allowed to do that',
		data: null,
		success: codes.notAllowed
	});
}

// Code -11 to -19
function missing(res, field, errorCode) {
	sendResponse(res, 400, {
		message: 'Error : Missing ' + field,
		data: null,
		success: errorCode
	});
}

function alreadyExist(res, field) {
	sendResponse(res, 409, {
		message: 'Error : ' + field + ' already exists',
		data: null,
		success: codes.alreadyExist
	});
}

function notFound(res, field) {
	sendResponse(res, 404, {
		message: 'Error : No ' + field + ' found',
		data: null,
		success: codes.notFound
	});
}

function badLogin(res) {
	sendResponse(res, 401, {
		message: 'Error : Bad combinaison username/password',
		data: null,
		success: codes.badLogin
	});
}

function editError(res, err) {
	console.error(err);
	sendResponse(res, 500, {
		message: 'MongoDB error during edition',
		data: err,
		success: codes.editError
	});
}

function selectError(res, err) {
	console.error(err);
	sendResponse(res, 500, {
		message: 'MongoDB error during selection',
		data: err,
		success: codes.selectError
	});
}

function deleteError(res, err) {
	console.error(err);
	sendResponse(res, 500, {
		message: 'MongoDB error during deletion',
		data: err,
		success: codes.deleteError
	});
}

function insertError(res, err) {
	console.error(err);
	sendResponse(res, 500, {
		message: 'MongoDB error during insertion',
		data: err,
		success: codes.insertError
	});
}

function invalidID(res) {
	sendResponse(res, 400, {
		message: 'Error : Invalid ID',
		data: null,
		success: codes.invalidID
	});
}

function serverError(res, message, data, errorCode) {
	sendResponse(res, 500, {
		message: message,
		data: data,
		success: errorCode
	});
}

function invalidParameter(res, field) {
	sendResponse(res, 400, {
		message: 'Error : Invalid ' + field,
		data: null,
		success: codes.invalidParameter
	});
}

function surveyClosed(res) {
	sendResponse(res, 400, {
		message: 'Error : Survey closed',
		data: null,
		success: codes.surveyClosed
	});
}

function tooManyItems(res) {
	sendResponse(res, 400, {
		message: 'Error : Too many items',
		data: null,
		success: codes.tooManyItems
	});
}

function authenticationFailed(res, message, data) {
	sendResponse(res, 400, {
		message: message,
		data: data,
		success: codes.authenticationFailed
	});
}

function resourceNotFound(res, resource) {
	sendResponse(res, 204, {
		message: 'No ' + resource + ' available',
		data: null,
		success: codes.resourceNotFound
	});
}

function notHaveRights(res, message) {
	sendResponse(res, 400, {
		message: message,
		data: null,
		success: codes.notHaveRights
	});
}

module.exports.success = success;
module.exports.notLogged = notLogged;
module.exports.notAdmin = notAdmin;
module.exports.notMember = notMember;
module.exports.notOwner = notOwner;
module.exports.notAllowed = notAllowed;
module.exports.missing = missing;
module.exports.alreadyExist = alreadyExist;
module.exports.notFound = notFound;
module.exports.badLogin = badLogin;
module.exports.editError = editError;
module.exports.selectError = selectError;
module.exports.deleteError = deleteError;
module.exports.insertError = insertError;
module.exports.invalidID = invalidID;
module.exports.invalidParameter = invalidParameter;
module.exports.serverError = serverError;
module.exports.surveyClosed = surveyClosed;
module.exports.tooManyItems = tooManyItems;
module.exports.authenticationFailed = authenticationFailed;
module.exports.resourceNotFound = resourceNotFound;
module.exports.notHaveRights = notHaveRights;
module.exports.Codes = codes;
module.exports.MongoCodes = mongoCodes;