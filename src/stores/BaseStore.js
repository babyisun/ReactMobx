import {
  observable,
  configure,
  action,
  runInAction,
} from 'mobx';
import moment from 'moment';
// import DataStorage from '@/utils/dataStorage';
import ajax from '@/utils/ajax';

configure({
  enforceActions: true,
});
export default class BaseStroe {
    @observable version = '123';

    @observable loading = false;

    @observable user = null;

    @observable privilege = null;

    @action getUser = async () => {
      const data = await ajax.get('/crm/user/userinfo');
      if (data && data.success && data.data) {
        runInAction(() => {
          this.user = data.data.user;
        });
      }
    }

    @action getPrivilege = async () => {
      this.loading = true;
      const data = await ajax.get('/crm/user/userprivilege');
      if (data && data.success && data.data) {
        runInAction(() => {
          this.privilege = data.data.privilege;
          this.loading = false;
        });
      }
    }

    render() {
      this.version = +new Date();
    }

  @action.bound clear(cleardate) {
      this.pagination = {
        page: 1,
        page_size: 10,
      };
      if (!cleardate) {
        this.query = {};
      } else {
        this.query = {
          start_time: moment().startOf('day').add(-7, 'day').format('X'),
          end_time: moment().endOf('day').format('X'),
        };
      }
    }

  @action.bound hasAuth(code) {
    return this.privilege && this.privilege.indexOf(code) > -1;
  }
}
