module.exports = {
  webpack: (config, { dev }) => {
    config.module.rules.push({
      test: /\.test.js$/,
      loader: 'ignore-loader'
    })
    if (!dev) {
      config.devtool = 'source-map'
      for (const options of config.optimization.minimizer) { // eslint-disable-line
        if (options['constructor']['name'] === 'TerserPlugin') {
          options.options.sourceMap = true
          break
        }
      }
    }
    return config
  }
}
