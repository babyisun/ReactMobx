// 该文件使用koa为项目提供一种服务端渲染方式
// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'test';
process.env.NODE_ENV = 'test';

// babel-register作为一个插件可以将es6转为es5语法
require('babel-register');
// babel-polyfill用于实现浏览器不支持原生功能的代码，fetch，arr.from之类的
require('babel-polyfill');
// 忽略某些特定后缀的文件
require('../server/ignore.js')();
// 用于是识别图片资源，对于小于10k的图片转成base64位字符串
require('asset-require-hook')({
  extensions: ['jpg', 'png', 'gif', 'webp'],
  limit: 10000,
  name: 'static/media/[name].[ext]',
});
// 项目主资源与逻辑
require('../server/app.js');
