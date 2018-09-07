import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { matchPath } from 'react-router-dom';
import { matchRoutes } from 'react-router-config';
// import App from '../../src/app';
import { layout } from './layout';
import router from '../../src/router';

const fs = require('fs');
const paths = require('../../config/paths');

const getMatch = (routesArray, url) => routesArray.some(router => matchPath(url, {
  path: router.path,
  exact: router.exact,
}));


/**
 * 渲染服务端路由
 */
module.exports.render = async (ctx, next) => {
  // const { store } = getCreateStore(ctx);
  // const branch = matchRoutes(router, ctx.req.url);
  // const promises = branch.map(({ route }) => {
  //   const { component: {fetch} } = route;
  //   return fetch instanceof Function ? fetch(store) : Promise.resolve(null);
  // });
  // await Promise.all(promises).catch((err) => {
  //   console.log(err);
  // });
  // const isMatch = getMatch(router, ctx.req.url);
  // if (isMatch) {
  //   await next();
  // } else {
  //   const html = ReactDOMServer.renderToString(
  //     <html><div>ddddd</div></html>,
  //   );
  //   const body = layout(html);
  //   ctx.body = body;
  // }
  const dataStr = fs.readFileSync(`${paths.appBuild}/index.html`, { encoding: 'utf8' });
  ctx.body = dataStr;
};
