const { dirname } = require('path');
const path = require('path');

module.exports = {
    entry: '../src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'inline-source-map'
};