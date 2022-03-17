const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './main.js',
  optimization: {
    minimize: false
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [new CopyWebpackPlugin({
    patterns: [{from: './index.html'}, {from: './favicon.svg'}]
  })]
};