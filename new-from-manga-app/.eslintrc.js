module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-tabs': 'off',
    'no-multiple-empty-lines': 'off',
    indent: 'off',
    'comma-dangle': 'off',
    'space-before-function-paren': 'off',
    'no-trailing-spaces': 'off',
    'eol-last': 'off',
    'object-curly-spacing': 'off',
    'semi': 'off',
    'no-unused-vars': 'off'
    }
}
