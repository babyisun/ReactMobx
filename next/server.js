const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: './next', dev });
const handle = app.getRequestHandler();
const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3009;
const routers = require('./router');

app.prepare().then(() => {
  const server = express();
  routers.forEach(item => {
    const { path, file, formatParams = null } = item;
    server.get(path, (req, res) => {
      const queryParams = {
        title: req.params.id,
      };
      app.render(req, res, file, formatParams ? formatParams(req.params) : req.params);
    });
  });
  // server.get('/Home', (req, res) => {
  //   const actualPage = '/page';
  //   app.render(req, res, actualPage);
  // });
  // server.get('*', (req, res) => handle(req, res));

  server.listen(DEFAULT_PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${DEFAULT_PORT}`);
  });
}).catch((ex) => {
  console.error(ex.stack);
  process.exit(1);
});
