/* Webpack settings for development */

module.exports = webpack => {
  return {
    // sets process.env.NODE_ENV = 'development'
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './public',
      port: 3000,
      hot: true,
      historyApiFallback: true,
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
  }
}
