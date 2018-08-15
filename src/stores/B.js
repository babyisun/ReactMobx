import {
  extendObservable,
  runInAction,
} from 'mobx';

export const asyncAction = (currClass, currAction) => {
  const actionName = currAction.replace('async_', '');
  extendObservable(currClass, {
    [`${actionName}Loading`]: false,
    [`${actionName}Data`]: null,
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
      currClass[`${actionName}Loading`] = true;
    });
    const data = await old();
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
