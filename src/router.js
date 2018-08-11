const router = [{
  name: '导航一',
  path: '/one',
  icon: 'appstore',
  code: 400001,
  children: [{
    name: '列表一',
    path: '/One/TwoA',
    file: '/One/TwoA/Index',
    store: '/One/TwoA/store',
    icon: 'appstore-o',
    code: 400002,
    children: [{
      name: '详情1',
      path: '/detail1',
      icon: 'appstore-o',
      file: 'a',
      code: 400002,
    }],
  }, {
    name: '列表二',
    path: '/one/twob',
    file: '/One/TwoB/Index',
    store: '/One/TwoB/store',
    icon: 'appstore-o',
    code: 400002,
  }, {
    name: '列表三',
    path: '/demo',
    icon: 'appstore-o',
    code: 400002,
  }],
},
{
  name: '导航二',
  path: '/nav2',
  icon: 'bank',
  code: 400003,
},
];

export default router;
