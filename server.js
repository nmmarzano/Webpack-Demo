const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

const port = 3000;
const appName = 'Webpack Demo';

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
}));

app.listen(port, function() {
    console.log(appName + ' listening on port ' + port + '\n');
});