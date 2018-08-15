import {
  observable,
  action,
  runInAction,
} from 'mobx';
import BaseStroe from '@/stores/BaseStore';
import ajax from '@/utils/ajax';
// import {
//   message,
// } from 'antd';

class TwoA extends BaseStroe {
    // 声明
    api={
      getList: params => ajax.get('api/demo', { params }),
    }

    @observable total = 10010;

    @action.bound method() {
      console.log('这是一个同步方法');
    }

    @action.bound method11() {
      console.log('这是方法的归属不在this');
    }

    @action.bound async async_add() {
      // 接口调用
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log(this);
      // runInAction(() => {
      //   this.total = Math.random();
      // });
    }

    @action.bound async async_list_load() {
      // 接口调用
      const params = { ...{ name: '这是一个示例参数' } };
      return this.api.getList(params);
      // console.log(this.loadData);
    }
}
const store = new TwoA();
export default store;
