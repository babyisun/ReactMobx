const Koa = require('koa');
const path = require('path');
// 我的理解是koa-json提供了接口返回对象转json格式的功能
const json = require('koa-json');
const onerror = require('koa-onerror');
// 中间件，用于动态解析body，如post传递的表单，json数据，上传文件之类的，使用之后可以在koa中直接获取到
const bodyparser = require('koa-bodyparser');
const logger = require('koa-logger');
const staticCache = require('koa-static-cache');
const index = require('./routers/index');

const app = new Koa();
// error handler
onerror(app);

// 解析某些类型的数据
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text'],
}));

// 返回格式转json
app.use(json());
app.use(logger());

// routers
app.use(index.routes(), index.allowedMethods());

app.use(require('koa-static')(`${__dirname }../build`));

app.use(staticCache(path.resolve(__dirname, '../build'), {
  maxAge: 365 * 24 * 60 * 60,
  gzip: true,
}));
// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx);
});

/**
 * Get port from environment and store in Express.
 */

const port = process.env.PORT || '3008';
// app.set('port', port);

app.listen(port, () => {
  console.log(`listen on:${port}`);
});
