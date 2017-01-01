'use strict';

let nodemailer = require('nodemailer');

let transport = nodemailer.createTransport({
	host: process.env.MAIL_HOST,
	port: process.env.MAIL_PORT,
	secure: process.env.MAIL_SECURE,
	auth: {
		user: process.env.MAIL_ADDRESS,
		pass: process.env.MAIL_PASSWORD
	}
});

const from = 'Default Mail <' + process.env.MAIL_ADDRESS + '>';

const basicMail = {
	subject: 'Subject',
	text: [
		'Mail body\r\n\r\n'
	]
};

function sendBasicMail(params, callback) {
	transport.sendMail({
		from: from,
		to: params.to,
		subject: basicMail.subject,
		text: basicMail.text
			.join('')
			.replace('<link>', params.url)
	}, (err) => {
		if (callback) {
			callback(err);
		}
	});
}
module.exports = {
	sendBasicMail: sendBasicMail
};