const demo = require('./demo');
const agent = require('./agent');

module.exports = {
    'GET /api/demo': demo.list,
    'GET /crm/agent/getmerchantfee': agent.agentdatalist,
    'GET /crm/agent/getsecondinfos ': agent.agentL2list,
    'GET /crm/merchant/getmerchantlist ': agent.agentShoplist,
    'GET /crm/merchant/getmerchantinfo ': agent.agentShopDetail,
    'GET /crm/agent/getmerchantworkinfo': agent.agentPayList,
    'GET /crm/agent/preorder/list':agent.purchaseList
};