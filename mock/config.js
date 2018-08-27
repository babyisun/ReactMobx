const demo = require('./demo');
const agent = require('./agent');

module.exports = {
    'GET /svr/wp/user/getInfo': demo.list,
    'GET /api/demo': demo.list,
    'GET /api/agent/getmerchantfee': agent.agentdatalist,
    'GET /api/agent/getsecondinfos ': agent.agentL2list,
    'GET /api/merchant/getmerchantlist ': agent.agentShoplist,
    'GET /api/merchant/getmerchantinfo ': agent.agentShopDetail,
    'GET /api/agent/getmerchantworkinfo': agent.agentPayList,
    'GET /api/agent/preorder/list': agent.purchaseList,
};