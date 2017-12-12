const path = require('path');
const glob = require('glob');

module.exports = {
  webpack: (config, { dev }) => {
    config.module.rules.push({
      test: /\.test.js$/,
      loader: 'ignore-loader'
    })
    return config;
  }
}
