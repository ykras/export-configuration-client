const webpack = require('webpack');
const conf = require('./gulp.conf');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const pkg = require('../package.json');
const autoprefixer = require('autoprefixer');

module.exports = {
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint'
      }
    ],

    loaders: [
      {
        test: /.json$/,
        loaders: [
          'json'
        ]
      },
      {
        test: /\.(css|scss)$/,
        loaders: ExtractTextPlugin.extract({
          fallbackLoader: 'style',
          loader: 'css?minimize!sass!postcss'
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'babel'
        ]
      },
      { test:/bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/, loader: 'imports?jQuery=jquery' },
      { test: /\.(woff2?|svg)$/, loader: 'url?limit=10000&name=[name].[ext]' },
      { test: /\.(ttf|eot)$/, loader: 'file?name=[name].[ext]' },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?name=[name].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: conf.path.src('index.html'),
      favicon: conf.path.src('/app/images/VocordTraffic.png')
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {unused: true, dead_code: true, warnings: false} // eslint-disable-line camelcase
    }),
    new ExtractTextPlugin('index.css'),
    new webpack.optimize.CommonsChunkPlugin({name: 'vendor'}),
    new CopyWebpackPlugin([{from: conf.path.src('config.js')}])
  ],
  postcss: () => [autoprefixer],
  output: {
    path: path.join(process.cwd(), '/../'),
    filename: '[name].js'
  },
  entry: {
    app: `./${conf.path.src('index')}`,
    vendor: Object.keys(pkg.dependencies)
  },
  stats: "errors-only"
};
