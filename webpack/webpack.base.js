const path = require('path');
const config = require('./config');

module.exports = {
    entry: {
        app: [
            path.resolve(__dirname, '../src/index.jsx')
        ]
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js',
        publicPath: `http://localhost:${config.port}/dist`,
    },
    resolve: {
        extensions: ['.js', '.jsx', '.less'],
    },
};
