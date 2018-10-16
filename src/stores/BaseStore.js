import {
  observable,
  configure,
  action,
  // runInAction,
  // extendObservable,
} from 'mobx';
// import moment from 'moment';
import { asyncAction } from './B';

configure({
  enforceActions: 'always',
});
export default class BaseStroe {
  constructor() {
    this.init();
  }

  init() {
    this.loading && this.loading.forEach(item => {
      asyncAction(this, item);
    });
  }

    @observable version = '';

    @observable user = null;

    @observable privilege = [100, 101];// 模拟数据

    render() {
      this.version = +new Date();
    }

    // 验证是否有权限
    @action.bound hasAuth(code) {
      return this.privilege && this.privilege.includes(code);
    }
}
