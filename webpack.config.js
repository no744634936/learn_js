const path = require('path');

//entry 是相对路径。从entry得到代码。从output输出代码。
//path 是要绝对路径
// module.exports必须在node.js里面才能执行
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/assets'),
    filename: 'bundle.js'
  }
};