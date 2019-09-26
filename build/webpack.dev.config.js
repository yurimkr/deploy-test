const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')

const devWebpackConfig = merge(baseWebpackConfig, {
  // development configuration
  mode: 'development',
  devtool: '#eval-source-map',
  devServer: {
    contentBase: baseWebpackConfig.externals.paths.dist,
    port: 8081,
    historyApiFallback: true,
    noInfo: true,
    overlay: {
        warnings: true,
        errors: true
    }
  },
  plugins: []
})

module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig)
})