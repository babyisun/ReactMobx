import React from 'react';
import { Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import { Launcher, MESSAGE } from '@/components/common/Launcher';


/* const load = (pagePath, storePath) => Loadable({
  loader: async () => {
    console.log(pagePath, storePath);
    // const loaded = await import(`@/pages${pagePath}`).catch(e => e);
    const [loaded, model] = await Promise.all([
        import(`@/pages${pagePath}`),
        storePath && import(`@/pages${storePath}`),
    ]);
    console.log(model, 'abc');
    return { loaded, model };
  },

  loading: () => (<Launcher />),
  render: ({ loaded, model }, props) => {
    console.log(model, 'mmm');
    if (loaded.name === 'Error') {
      console.log('page文件加载错误');
      return <Launcher message={MESSAGE.ERROR} />;
    }
    if (model.name === 'Error') {
      console.log('store文件加载错误');
      return <Launcher message={MESSAGE.ERROR} />;
    }
    const Component = loaded.default || loaded;
    const models = model.default || model;
    console.log(models, 'model');
    return <Component store={models} {...props} />;
  },
//   delay: 1000,
}); */

const load = (pagePath, storePath) => Loadable({
  loader: async () => {
    console.log(pagePath, storePath);
    const promises = [import(`@/pages${pagePath}`)];
    if (storePath && storePath.length) {
      storePath.forEach(item => {
        console.log(`${item}`, 'it');
        promises.push(import(`@/${item}`));
        // if (item.indexOf('@') < 0) {
        //   promises.push(import(`@/${item}`));
        // }
      });
    }
    const loaded = await Promise.all(promises);
    return loaded;
  },

  loading: (props) => {
    // console.log(props, 'laoding');
    // const message = { ...MESSAGE.ERROR, ...{ content: props.error } };
    const { error } = props;
    if (error) return <Launcher message={{ title: 'Error', content: error.message }} />;
    return <Launcher />;
  },
  render: (loaded, props) => {
    let Component = null;
    const stores = {};
    console.log(props, 'llll');
    if (!loaded) return <Launcher message={MESSAGE.ERROR} />;
    const len = loaded.length;
    if (len > 0) {
      // if (loaded[0].name === 'Error') {
      //   console.log('page文件加载错误');
      //   return <Launcher message={MESSAGE.ERROR} />;
      // }

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
  const { path, file, store } = route;
  const LoadedComponent = load(file, store);

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
