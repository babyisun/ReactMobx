import React from 'react';
import { NavLink } from 'react-router-dom';
import { router } from '@/router';
import { Breadcrumb } from 'antd';
import styles from './Path.scss';

/**
 * Path - 根据router自动生成 面包屑导航组件
 * @param {object} data - 导航数据源 e.g. [{ name: '首页', path: '/'}, { name: '关于'}]
 */
const Path = ({ data }) => {
  const SPLITLETTER = '/';
  let r = data.split(SPLITLETTER), father, son, grandson, array = [];
  //列表页
  if (r.length > 2) {
    father = router.find(i => i.path === SPLITLETTER + r[1]);
    if (!father) { return null; }
    son = father.children.find(i => i.path === father.path + SPLITLETTER + r[2]);
    array = [{ name: father.name }];
  }
  //详情页
  if (r.length > 3) {
    array.push({ name: son.name, path: son.path });
    grandson = son.children.find(i => i.path.indexOf(son.path + SPLITLETTER + r[3]) >= 0);
    array.push({ name: grandson.name });
  } else {
    son && array.push({ name: son.name });
  }
  return array.length > 0 && (
    <Breadcrumb className={styles.path}>
      {
        array.map(({ name, path }, i) => {
          return <Breadcrumb.Item key={i}>
            {path === undefined ? name : <NavLink to={path}>{name}</NavLink>}
          </Breadcrumb.Item>
        })
      }
    </Breadcrumb>
  );
}

export default Path;
