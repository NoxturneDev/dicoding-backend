module.exports = {
  env: {
    browser: false,
    commonjs: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    semi: 'error',
    indent: ['warn', 2],
    quotes: ['warn', 'single'],
    'linebreak-style': 0,
  },
};
