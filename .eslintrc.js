module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    //设置"script"（默认）或"module"如果你的代码是在ECMAScript中的模块。
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-unused-vars': [2, {
      // 允许声明未使用变量
      'vars': 'local',
      // 参数不检查
      'args': 'none'
    }],
    // 关闭语句强制分号结尾
    'semi': [0], //'semi': ['error', 'always'], // 结尾配置分号
    //空行最多不能超过100行
    'no-multiple-empty-lines': [0, {'max': 100}],
    //关闭禁止混用tab和空格
    'no-mixed-spaces-and-tabs': [0],
    'indent': 0,  // 缩进
    'space-before-function-paren': 0,
    "space-before-blocks": 0 // [0, "always"],//不以新行开始的块{前面要不要有空格
  }
};

/* eslint-disable no-new */
// resoure: https://cn.eslint.org/docs/rules/
