// const tel = /^1[0-9]{10}$/;
var Mock = require('mockjs');
const roles = ['管理员', '客服', '游客'];

module.exports = {
    list: {
        'data|21': [{
            'id|+1': 1, //递增
            'number|1-100': 100, //100内整数
            price: /^[0-9]+\.[0-9]{2}$/, //俩位小数
            // name: '@cname', //名字
            // role_id: '@natural(0, 100)',
            // 'role_name|1': roles, //枚举里生成
            // remark: '@csentence', //备注
            // email: '@EMAIL',
            // time: '@datetime',
            // name: '@FIRST',
            // title: '@TITLE',
            // ip: Mock.Random.ip(),
            tel: /^1[385][1-9]\d{8}/
        }, ],
    },
};