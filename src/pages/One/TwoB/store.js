import { observable } from 'mobx';
import BaseStroe from '@/stores/BaseStore';

class TwoB extends BaseStroe {
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
}

const store = new TwoB();
export default store;
