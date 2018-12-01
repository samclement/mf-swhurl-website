module.exports = {
  parser: "babel-eslint",
  extends: ['standard', 'standard-react'],
  plugins: ['styled-components-config'],
  rules: {
    'react/display-name': 0,
    'react/jsx-indent': [true, 2],
    'react/prop-types': 0,
    'space-before-function-paren': 0,
    'jsx-quotes': ['error', 'prefer-double']
  },
  env: {
    browser: true,
    node: true,
    jest: true
  },
  globals: {
    browser: true
  }
}
