import {
  observable,
  configure,
  // action,
  // runInAction,
  // extendObservable,
} from 'mobx';
// import moment from 'moment';
import { asyncAction } from './B';

configure({
  enforceActions: true,
});
export default class BaseStroe {
  constructor() {
    this.init();
  }

  init() {
    // const funs = Object.getOwnPropertyNames(Object.getPrototypeOf(this));
    // console.log('a', this.loading);
    // console.log('b', funs);
    // Object.keys(this).forEach(actionName => {
    //   console.log(actionName, 'name');
    // });
    // funs.forEach(item => {
    //   // console.log(item,this[item].toString())
    //   if (item.indexOf('async_list') >= 0) {
    //     asyncListAction(this, item);
    //   } else if (item.indexOf('async') >= 0) {
    //     asyncAction(this, item);
    //   }
    // });
    this.loading && this.loading.forEach(item => {
      // console.log(item);
      asyncAction(this, item);
    });
  }

    @observable version = '';

    // @observable loading = {};

    render() {
      this.version = +new Date();
    }
}
