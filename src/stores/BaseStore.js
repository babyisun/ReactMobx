import {
  observable,
  configure,
  // action,
  // runInAction,
  // extendObservable,
} from 'mobx';
// import moment from 'moment';
import { asyncAction, asyncListAction } from './B';

configure({
  enforceActions: true,
});
export default class BaseStroe {
  constructor() {
    this.init();
  }

  init() {
    const funs = Object.getOwnPropertyNames(Object.getPrototypeOf(this));
    console.log('a', this['async_add'] ? this['async_add'].name : 'no');
    console.log('b', this);
    Object.keys(this).forEach(actionName => {
      console.log(actionName, 'name');
    });
    funs.forEach(item => {
      // console.log(item,this[item].toString())
      if (item.indexOf('async_list') >= 0) {
        asyncListAction(this, item);
      } else if (item.indexOf('async') >= 0) {
        asyncAction(this, item);
      }
    });
  }

    @observable version = '';

    render() {
      this.version = +new Date();
    }
}
