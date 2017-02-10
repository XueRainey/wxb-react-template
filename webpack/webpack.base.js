const path = require('path');

module.exports = {
    entry: {
        app: [
            path.resolve(__dirname, '../src/index.jsx')
        ]
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js',
        publicPath: 'http://localhost:8080/',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.less'],
    },
};
