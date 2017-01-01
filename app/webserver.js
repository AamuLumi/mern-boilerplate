'use strict';

let webpack = require('webpack');
let WebpackDevServer = require('webpack-dev-server');
let config = require('./config/webpack.config.js');

const PORT = 9080;

new WebpackDevServer(webpack(config), {
	publicPath: config.output.publicPath,
	hot: true,
	historyApiFallback: true
}).listen(PORT, 'localhost', function (err) {
	if (err) {
		console.log(err);
	}

	console.log('Listening at localhost:' + PORT);
});
