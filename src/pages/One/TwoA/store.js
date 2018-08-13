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

    @observable total = 10010;

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
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log(this);
    }
}
const store = new TwoA();
export default store;
