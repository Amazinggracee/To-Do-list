const path = require('path');

module.exports = {
  // Entry point
  entry: { index: path.resolve(__dirname, 'src', 'index.js') },
  // output point
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};