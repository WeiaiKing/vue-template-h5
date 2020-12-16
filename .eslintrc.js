module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // "space-before-function-paren": ["off"],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'indent': [0, 2], // 两个空格的缩进
    'quotes': [0, 'single'], // js必须使用单引号
    'linebreak-style': [0, 'unix'], // 换行风格 unix/windows
    'semi': [0, 'always'], // 语句强制分号结尾
    "no-tabs": "off",
    // 函数名后必须有空格的，去掉这个 'space-before-function-paren':0 禁用这个规则
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always'
    }],
  }
}
