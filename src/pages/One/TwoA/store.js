import { observable, action, runInAction } from 'mobx';
import BaseStroe from '@/stores/BaseStore';
import ajax from '@/utils/ajax';
import {
  message,
} from 'antd';

class TwoA extends BaseStroe {
//   constructor() {
//     super();
//   }

    // 分页参数
    @observable pagination = {
      page: 1, // 当前页数
      page_size: 10, // 每页条数
    }

    // 查询参数
    @observable query = {};

    // loading标量
    @observable loading = false;

    @observable detailLoading = false;

    @observable modalLoading = false;

    @observable agentModalVisable = false;

    @observable detailModalVisable = false;

    // 声明
    @observable data = [];

    @observable dataDetail = {};

    @observable total = 0;

    @action load = async () => {
      this.loading = true; // 开启loading动画（render触发一次）
      const params = Object.assign({}, this.pagination, this.query); // 合并参数
      // 接口调用
      const data = await ajax.get('/crm/agent/listFirstAgent', {
        params,
      });
        // 检测数据完整性并在runInAction中完成一次性渲染（render触发一次）
      if (data && data.data) {
        runInAction(() => {
          this.data = data.data.agent_list;
          this.total = data.data.total;
          this.loading = false;
        });
      }
    }

    @action loadDetail = async (agentid) => {
      this.detailLoading = true; // 开启loading动画（render触发一次）
      // 接口调用
      const data = await ajax.get('/crm/agent/findFirstAgent', {
        params: {
          agent_id: agentid,
        },
      });
        // 检测数据完整性并在runInAction中完成一次性渲染（render触发一次）
      if (data && data.data) {
        runInAction(() => {
          this.dataDetail = data.data;
          this.detailLoading = false;
        });
      } else {
        runInAction(() => {
          this.detailLoading = false;
        });
      }
    }

    // 查询后加载数据
  @action.bound onSearch(values) {
      this.pagination.page = 1; // 初始化到第一页
      this.query = values; // 注入查询参数
      this.load();
    }

    // 分页后查询
  @action.bound onPageChange(page, page_size) {
    this.pagination.page = page;
    this.pagination.page_size = page_size;
    this.load();
  }

  // 方法
  @action.bound setAgentModalVisable(value) {
    this.agentModalVisable = value;
  }

  @action.bound setDetailModalVisable(value, agentid) {
    this.detailModalVisable = value;
    if (value) this.loadDetail(agentid);
  }

    // 创建
    @action onCreate = async (values) => {
      this.modalLoading = true;
      // 这里要改成请求接口
      const data = await ajax.post('/crm/agent/CreateAgentOrMerchant', values);
      if (data && data.data) {
        runInAction(() => {
          this.setAgentModalVisable(false); // 关闭弹出框
          this.modalLoading = false;
          this.load();
          message.success('创建成功');
        });
      } else {
        runInAction(() => {
          this.modalLoading = false;
        });
      }
    }

    // 冻结/解冻
    @action onFreeze = async (row) => {
      const _status = +!row.freeze_status;
      const data = await ajax.post('/crm/agent/updateFreezeStatus', {
        agent_id: row.agent_id,
        status: _status,
      });
      if (data && data.data) {
        runInAction(() => {
          row.freeze_status = _status;
          this.render();
          message.success(`${row.freeze_status ? '解冻' : '冻结'}成功`);
        });
      }
    }
}

export default new TwoA();
