// 在这里设置服务端路由的配置
module.exports = [
  {
    path: '/list/:id',
    file: '/index',
    formatParams: (params = {}) => ({
      title: params.id,
    }),
  },
  {
    path: '/Home',
    file: '/page',
  },
];
