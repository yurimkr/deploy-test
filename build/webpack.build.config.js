const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const buildWebpackConfig = merge(baseWebpackConfig, {
  // build configuration
  mode: 'production',
  optimization: {
    minimize: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.LoaderOptionsPlugin({
    minimize: true
    })    
  ]
})

module.exports = new Promise((resolve, reject) => {
  resolve(buildWebpackConfig)
})