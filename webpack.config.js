const path = require('path');

module.exports = {
  mode: 'production', // or 'development'
  entry: './src/main.ts', // your plugin entry
  target: 'node', // Obsidian plugins run in a Node-like environment
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '.'),
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  externals: {
    // Prevent webpack from bundling the obsidian module.
    obsidian: 'commonjs obsidian'
  }
};
