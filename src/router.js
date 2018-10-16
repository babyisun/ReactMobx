/**
 * 全局路由配置
 *
 * name - 导航展示名称
 * path - 页面 url路由，区分大小写，与你的文件夹命名大小写保持一致
 * folder - 文件目录，区分大小写，与你的文件夹命名大小写保持一致
 * file - 页面文件所在路径，
 * store - 页面对应的store文件，可接收多个，数组形式，同文件夹直接写名称，不同文件夹请写src下的全路径
 * icon - 图标名
 * code - 权限码
 * showChildren - 是否显示展现子菜单，默认不展示，如需展示请设为true
 *
 * children - 配置项递归同上
 */
const router = [{
  name: '导航一',
  path: '/One',
  icon: 'appstore',
  code: 100,
  showChildren: true,
  children: [{
    name: '列表一',
    path: '/One/TwoA',
    folder: '/One/TwoA', // 所在文件夹
    file: 'Index', // 有file属性的会加入路由
    store: ['store'], // 有store属性的会注入store实例到props，与path在同一目录直接写文件名即可
    icon: 'appstore-o',
    code: 10001,
    children: [{
      name: '详情1',
      path: '/One/TwoA/Detail/:id',
      folder: '/One/TwoA',
      file: 'Detail',
      code: 10002,
    }],
  }, {
    name: '列表二',
    path: '/One/TwoB',
    folder: '/One/TwoB',
    file: 'Index',
    store: ['store', 'components/AdressModal/store'], // 注入多个store，不在同一文件夹要写全路径
    icon: 'appstore-o',
    code: 10003,
  }],
},
{
  name: '导航二',
  path: '/Demo',
  folder: '/Demo',
  file: 'Index',
  icon: 'bank',
  code: 101,
  children: [{
    name: '详情1',
    path: '/Demo/Detail2',
    folder: '/One/TwoA',
    file: 'Detail',
    code: 10101,
  }],
},
];

export default router;
