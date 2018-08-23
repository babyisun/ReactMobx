import {
  extendObservable,
  runInAction,
} from 'mobx';

const SUFFIX = { LOADING: 'Loading', DATA: 'Data' };
// 不成熟方案
/* export const asyncAction = (currClass, currAction) => {
  const actionName = currAction.replace('async_', '');
  extendObservable(currClass, {
    [`${actionName}${SUFFIX.LOADING}`]: false,
    [`${actionName}${SUFFIX.DATA}`]: null,
    // loading: {
    //   [actionName]: false,
    // },
    // data: {
    //   [actionName]: null,
    // },
  });
  const old = currClass[currAction];
  currClass[currAction] = async () => {
    runInAction(() => {
      currClass[`${actionName}${SUFFIX.LOADING}`] = true;
    });
    const data = await old();
    if (data && data.success) {
      runInAction(() => {
        currClass[`${actionName}${SUFFIX.DATA}`] = data.data;
        currClass[`${actionName}${SUFFIX.LOADING}`] = false;
      });
    } else {
      runInAction(() => {
        currClass[`${actionName}${SUFFIX.LOADING}`] = false;
      });
    }
  };
}; */

export const asyncAction = (currClass, actionName) => {
  extendObservable(currClass, {
    [`${actionName}${SUFFIX.LOADING}`]: false,
    [`${actionName}${SUFFIX.DATA}`]: null,
    // loading: {
    //   [actionName]: false,
    // },
  });
  const old = currClass[actionName];
  currClass[actionName] = async () => {
    runInAction(() => {
      currClass[`${actionName}${SUFFIX.LOADING}`] = true;
    });
    const data = await old();
    runInAction(() => {
      currClass[`${actionName}${SUFFIX.LOADING}`] = false;
    });
    return data;
    /* if (data && data.success) {
      runInAction(() => {
        currClass[`${actionName}${SUFFIX.DATA}`] = data.data;
        currClass[`${actionName}${SUFFIX.LOADING}`] = false;
      });
    } else {
      runInAction(() => {
        currClass[`${actionName}${SUFFIX.LOADING}`] = false;
      });
    } */
  };
};

export const asyncListAction = (currClass, currAction) => {
  const actionName = currAction.replace('async_list_', '');
  extendObservable(currClass, {
    [`${actionName}Page`]: {
      page: 1, // 当前页数
      page_size: 10, // 每页条数
    },
    [`${actionName}Query`]: null,
    [`${actionName}Loading`]: false,
    [`${actionName}Data`]: null,
  });
  const old = currClass[currAction];
  currClass[currAction] = async () => {
    runInAction(() => {
      currClass[`${actionName}Loading`] = true;
    });
    const data = await old();
    console.log(data);
    if (data && data.success) {
      runInAction(() => {
        currClass[`${actionName}Data`] = data.data;
        currClass[`${actionName}Loading`] = false;
      });
    } else {
      runInAction(() => {
        currClass[`${actionName}Loading`] = false;
      });
    }
  };
};
