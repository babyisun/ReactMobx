const router = require('koa-router')();
const { render } = require('../render/index');

router.get('/', render);

module.exports = router;
