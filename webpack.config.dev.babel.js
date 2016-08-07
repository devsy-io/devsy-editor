import {join} from 'path'
import {HotModuleReplacementPlugin} from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const SRC_PATH = join(__dirname, '/src')
const APP_PATH = join(__dirname, '/examples')
const COMPONENTS_PATH = join(__dirname, '..', 'devsy-components', 'src')

export default {
  context: APP_PATH,
  entry: './',
  output: {
    path: join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: 'http://localhost:3000/dist'
  },
  resolve: {
    alias: {
      'devsy-editor': SRC_PATH
    },
    extensions: ['', '.js', '.scss']
  },
  module: {
    loaders: [{
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass'],
      include: [APP_PATH, SRC_PATH, COMPONENTS_PATH]
    }, {
      test: /\.js$/,
      loaders: ['babel'],
      include: [APP_PATH, SRC_PATH, COMPONENTS_PATH]
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    port: 3000,
    stats: { colors: true },
    inline: true,
    publicPath: '/dist/'
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin()
  ]
}
