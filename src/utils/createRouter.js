import React from 'react';
import { Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import { Launcher, MESSAGE } from '@/components/common/Launcher';


const load = (pagePath, storePath) => Loadable({
  loader: async () => {
    console.log(pagePath, storePath);
    // const loaded = await import(`@/pages${pagePath}`).catch(e => e);
    const [loaded, model] = await Promise.all([
        import(`@/pages${pagePath}`),
        storePath && import(`@/pages/${storePath}`),
    ]);
    console.log(loaded, 'x');
    return { loaded, model };
  },

  loading: () => (<Launcher />),
  render: ({ loaded, model }, props) => {
    if (loaded.name === 'Error') {
      console.log('page文件加载错误');
      return <Launcher message={MESSAGE.ERROR} />;
    }
    // console.log(model, 'model');
    // if (model.name === 'Error') {
    //   console.log('store文件加载错误');
    //   return <Launcher message={MESSAGE.ERROR} />;
    // }
    const Component = loaded.default || loaded;
    // const models = model.default || model;
    return <Component {...props} />;
  },
//   delay: 1000,
});
/* const Stores = {};
const loadStore = async (storePath) => {
  const loaded = await import(`@/pages${storePath}`).catch(e => e);
  const model = loaded.default;
  Stores.baseStore = model;
  console.log(model);
  return model;
}; */
/**
 * setRoute - 生成 <Route />
 */
const setRoute = route => {
  const { path, file, store } = route;
  console.log(store, 'store');
  const LoadedComponent = store ? load(file, store) : load(file);

  const Component = props => <LoadedComponent {...props} />;
  return <Route key={path} path={path} render={Component} exact />;
};

const createRouter = router => {
  const Routes = [];

  router.forEach(item => {
    if (item.children) {
    //   Routes.concat(createRouter(item.children));
      if (item.file) {
        Routes.push(setRoute(item));
      }
      /* if (item.store) {
        Stores.push(loadStore(item.store));
        Stores.baseStore = loadStore(item.store);
      } */
      const RS = createRouter(item.children);
      RS.Routes.forEach(i => Routes.push(i));
    //   RS.Stores.forEach(i => Stores.push(i));
    } else if (item.file) {
      Routes.push(setRoute(item));
      /* if (item.store) {
        Stores.push(loadStore(item.store));
        // Stores.baseStore = loadStore(item.store);
        // setTimeout(() => {
        //   console.log(Stores);
        // }, 1000);
      } */
    }
  });
  return { Routes };
};

export default createRouter;
