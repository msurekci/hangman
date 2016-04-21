const path = require('path');

module.exports = {
  entry: [
    './src/index'
  ],
  module: {
        loaders: [
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ }
        ]
    },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },

};
