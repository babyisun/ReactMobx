import {
  observable,
  action,
} from 'mobx';
import BaseStroe from '@/stores/BaseStore';
import { toProps } from '@/utils/decorator';

@toProps('adressModal')
class AdressModal extends BaseStroe {
    // 分页参数
    @observable text = 'this is a text';

    @action.bound change() {
      console.log('It changed');
      this.text = Math.random();
    }
}
const store = new AdressModal();
export default store;
