import {optimize, DefinePlugin} from 'webpack'
import {resolve} from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

export default {
  entry: resolve(__dirname, 'src'),
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel-loader']
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader'),
      exclude: /node_modules/
    }]
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'devsy-editor.js',
    library: 'devsy-editor',
    libraryTarget: 'umd'
  },
  plugins: [
    new ExtractTextPlugin('devsy-editor.css'),
    new optimize.OccurenceOrderPlugin(),
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  resolve: {
    extensions: ['', '.js']
  }
}
