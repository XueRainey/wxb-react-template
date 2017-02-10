const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const config = require('./config');
const webpackDevConfig = require('./webpack.dev');

webpackDevConfig.entry.app.unshift(
    'webpack/hot/dev-server',
    `webpack-dev-server/client?http://localhost:${config.port}`
);

new webpackDevServer(webpack(webpackDevConfig), {
    publicPath: webpackDevConfig.output.publicPath,
    hot: true,
    quiet: true,
    historyApiFallback: true
}).listen(config.port, 'localhost', function(err) {
    if (err) {
        console.log(err);
    }

    console.log(`Listening at localhost: ${config.port}`);
});
