// const tel = /^1[0-9]{10}$/;
var Mock = require('mockjs');
// const roles = ['管理员', '客服', '游客'];

module.exports = {
    list: {
        data: {
            'list|66': [{
                "time": '@datetime', //付款时间
                "id|+1": 1, //商户ID
                "name": "@cname", // 商户名称
                "pay_type|1": [1, 2, 3], //付款类型   0首次购买,1升级,2续费,3购买模块
                "pay_fee": '@natural(0, 100)', //金额 支付金额
                "package_end_time": '@date("yyyy-MM-dd")', //套餐到期时间
            }],
            total: 66,
        }
    },
};