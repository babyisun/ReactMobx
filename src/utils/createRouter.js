import React from 'react';
import { Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import { Launcher, MESSAGE } from '@/components/common/Launcher';

const load = (folder, file, store) => Loadable({
  loader: async () => {
    const promises = [import(`@/pages${folder}/${file}`)];
    if (store && store.length) {
      store.forEach(item => {
        if (item.indexOf('/') < 0) {
          promises.push(import(`@/pages${folder}/${item}`));
        } else {
          promises.push(import(`@/${item}`));
        }
      });
    }
    const loaded = await Promise.all(promises);
    return loaded;
  },

  loading: (props) => {
    const { error } = props;
    if (error) return <Launcher message={{ title: 'Error', content: error.message }} />;
    return <Launcher />;
  },
  render: (loaded, props) => {
    let Component = null;
    const stores = {};
    if (!loaded) return <Launcher message={MESSAGE.ERROR} />;
    const len = loaded.length;
    if (len > 0) {
      Component = loaded[0].default || loaded;

      if (len > 1) {
        for (let i = 1; i < len; i++) {
          const name = loaded[i].default.constructor.name.split('');
          name[0] = name[0].toLowerCase();
          stores[name.join('')] = loaded[i].default || loaded;
        }
      }
    }
    return <Component stores={stores} {...props} />;
  },
  //   delay: 1000,
  // timeout: 3000,
});

const setRoute = route => {
  const { path, folder, file, store } = route;
  const LoadedComponent = load(folder, file, store);

  const Component = props => <LoadedComponent {...props} />;
  return <Route key={path} path={path} render={Component} exact />;
};

const createRouter = router => {
  const Routes = [];
  router.forEach(item => {
    if (item.children) {
      if (item.file) {
        Routes.push(setRoute(item));
      }
      const RS = createRouter(item.children);
      RS.Routes.forEach(i => Routes.push(i));
    //   RS.Stores.forEach(i => Stores.push(i));
    } else if (item.file) {
      Routes.push(setRoute(item));
    }
  });
  return { Routes };
};

export default createRouter;
