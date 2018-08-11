var Mock = require('mockjs');
const roles = ['管理员', '客服', '游客'];

module.exports = {
    agentdatalist: {
        data: {
            'list|66': [{
                "pay_time": '@datetime', //付款时间
                "merchant_id|+1": 1, //商户ID
                "merchant_name": "@cname", // 商户名称
                "second_agent_name": "@FIRST", //二级代理商名称
                "first_agent_name": "@FIRST", //一级代理商名称
                "pay_type|1": [1, 2, 3], //付款类型   0首次购买,1升级,2续费,3购买模块
                "pay_fee": '@natural(0, 100)', //金额 支付金额
                "package_name|1": [1, 2], //购买内容  1:打包套餐；2:零售套餐
                "package_end_time": '@date("yyyy-MM-dd")', //套餐到期时间
                "sun_fee": '@natural(0, 100)' //总计付款
            }],
            total: 66
        }
    },
    agentL2list: {
        data: {
            'list|66': [{
                "first_agent_name": "@FIRST",
                "second_agent_id|+1": 1,
                "create_time": "@datetime",
                "second_agent_name": "@FIRST",
                "account_type|1": [1, 2, 3],
                "audit_status": "@integer( 1, 3 )",
                "yesterday_client_num": "@natural(0, 100)",
                "yesterday_pay_fee": "@natural(0, 100)",
                "today_client_num": "@natural(0, 100)",
                "today_pay_fee": "@natural(0, 100)",
                "province": "安徽省",
                "city": "铜陵市",
                "county": "萨县",
            }],
            total: 66
        }
    },
    agentShoplist: {
        data: {
            'list|100': [{
                "merchant_id|+1": 1,//商户ID
                "merchant_name": "@FIRST",//商户名称
                "first_agent_name":"@FIRST",
                "second_agent_name":"@FIRST",
                "initial_password": "@word(10)",//初始密码
                "create_time":"@datetime",//创建时间
                "creator|+1": 1,//创建人ID
                "audit_status": "@integer( 1, 3 )",//1通过，2审核中，3驳回
                "account_type": "@integer( 1, 2 )",//1创建，2预采购
                "freeze_status": "@integer( 0, 1 )",//是否被冻结，1可用，0被冻结
                "auth_status":"@integer( 0, 1 )",//授权状态，1已授权，0未授权
                "pay_status":"@integer( 0, 2 )",//付费状态，0未付，1已付，2到期
            }],
            total: 100
        }
    },
    agentShopDetail: {
        data: {
            "merchant_id|+1": 1,//商户ID
            "merchant_name": "@FIRST",//商户名称
            "province": "安徽省",//所属地
            "city": "铜陵市",
            "county": "萨县",
            "shop_type": "@integer( 1, 3 )",    // 商户分类
            "main_business": "@FIRST",//主营业务
            "company_profile": "@paragraph(1)",//商户简介
            "account_name": "@word(10)",//账户名称
            "account_contact": "@word(10)",//联系人
            "account_address": "@sentence(3)",//地址
            "account_phone": /^1[385][1-9]\d{8}/,//电话
            "account_email": "@email()",//邮箱
            "account_other_info": "@paragraph(1)",//其他信息
            "initial_password": "@word(10)",//初始密码
            "create_time": "@datetime",//创建时间
            "creator|+1": 1,//创建人ID
            "audit_status": "@integer( 1, 3 )",//1通过，2审核中，3驳回
            "account_type": "@integer( 1, 2 )",//1创建，2预采购
            "freeze_status": "@integer( 0, 1 )",//是否被冻结，1可用，0被冻结
            "audit_advice": "@paragraph(1)",//审核意见
        }
    },
    agentPayList: {
        data: {
            'list|100': [{
                "pay_time": "@datetime",               // 付款时间
                "merchant_id|+1": 1,                //商户ID
                "merchant_name": "@FIRST",       //商户名称
                "pay_type": "@integer( 0, 3 )",                    //付费类型 0首次购买,1升级,2续费,3购买模块
                "pay_fee": "@natural(0, 100)",                 //金额
                "package_name": "打包",          //购买内容
                "package_end_tim": "@datetime",      //套餐到期时间
                "sum_fee": "@datetime"                    //总计付款
            }],
            total: 100
        }
    },
    purchaseList: {
        data: {
            'list|100': [{
                "id|+1" : 1, //自增
                "create_time":"@datetime", //创建时间
                "agent_id|+1" : 1, //商户ID
                "first_agent_name" : "@FIRST", //一级代理商名称
                "second_agent_name" : "@FIRST", //二级代理商名称
                "package":{ //套餐
                    "id": 123,
                    "name" : "初级版"
                },
                "is_used" :"@integer( 0, 1 )", //账户是否使用
            }],
            total: 100
        }
    }
};