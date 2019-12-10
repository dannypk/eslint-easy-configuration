module.exports = {
  extends: [
    'eslint-config-airbnb',
    './rules',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  rules: {
    strict: 'error',
  },
};
