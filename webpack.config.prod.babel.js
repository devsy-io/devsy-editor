import {optimize, DefinePlugin} from 'webpack'
import {resolve} from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

export default {
  entry: {
    app: resolve(__dirname, 'src'),
    vendors: ['draft-js', 'react-lowlight']
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader'),
      exclude: /node_modules/
    }]
  },
  exterals: {
    'react': 'react',
    'react-dom': 'react-dom'
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'devsy-editor.min.js',
    library: 'devsy-editor',
    libraryTarget: 'umd'
  },
  plugins: [
    new ExtractTextPlugin('devsy-editor.min.css'),
    new optimize.OccurenceOrderPlugin(),
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false
      }
    }),
    new optimize.CommonsChunkPlugin(
      /* chunkName= */'vendor',
      /* filename= */'vendor.bundle..min.js'
    )
  ],
  resolve: {
    extensions: ['', '.js']
  }
}
