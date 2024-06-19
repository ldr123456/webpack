// import { Configuration } from "webpack";
/*
 * @type {Configuration}
 */

const config = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js'
  },
  mode: 'none',
  module: {
    rules: [
      {
        test: /\.js$/, 
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  },
}
module.exports = config
