import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { matchPath } from 'react-router-dom';
import { matchRoutes } from 'react-router-config';
// import App from '../../src/app';
import { layout } from './layout';
import router from '../../src/router';

const getMatch = (routesArray, url) => routesArray.some(router => matchPath(url, {
  path: router.path,
  exact: router.exact,
}));


/**
 * 渲染服务端路由
 */
module.exports.render = async (ctx, next) => {
  const { store } = getCreateStore(ctx);
  const branch = matchRoutes(router, ctx.req.url);
  const promises = branch.map(({ route }) => {
    const { fetch } = route.component;
    return fetch instanceof Function ? fetch(store) : Promise.resolve(null);
  });
  await Promise.all(promises).catch((err) => {
    console.log(err);
  });
  const isMatch = getMatch(router, ctx.req.url);
  if (!isMatch) {
    await next();
  } else {
    const html = ReactDOMServer.renderToString(
      <div />,
    );
    const body = layout(html);
    ctx.body = body;
  }
};
