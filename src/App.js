import React from 'react';
import { Provider } from 'mobx-react';
// import DevTools from 'mobx-react-devtools'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
// import Loadable from 'react-loadable';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import router from '@/router';
import createRouter from '@/utils/createRouter';

import stores from './stores';

import './App.scss';

import BasicLayout from '@/pages/BasicLayout';
import Home from '@/pages/Home';
import Page404 from '@/pages/Page404';
// import { Launcher, MESSAGE } from '@/components/common/Launcher';

// import(/* webpackChunkName: "foo" */ '@/pages/Home'))


const App = () => {
  const { Routes } = createRouter(router);
  return (
    <Provider {...stores}>
      <Router>
        <LocaleProvider locale={zhCN}>
          <BasicLayout>
            <Switch>
              <Route exact path="/" component={Home} />
              {Routes}
              <Route component={Page404} />
            </Switch>
            {/* <DevTools /> */}
          </BasicLayout>
        </LocaleProvider>
      </Router>
    </Provider>
  );
};

export default App;
