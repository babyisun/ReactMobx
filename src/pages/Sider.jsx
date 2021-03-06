import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { observer, inject } from 'mobx-react';
import { withRouter, NavLink } from 'react-router-dom';
import router from '../router';
import styles from './Sider.scss';

const { SubMenu, Item } = Menu;

@inject('baseStore')
@observer
class Sider extends React.Component {
  render() {
    const { collapsed, onCollapse, location: { pathname }, baseStore } = this.props;
    const path = pathname.split('/');
    const defaultOpen = path.length > 1 ? path[1] : '';
    console.log(defaultOpen);
    return (
      <Layout.Sider className={styles.sider} width={260} collapsible
        collapsed={collapsed} onCollapse={onCollapse}>
        <Menu theme="dark" mode="inline" defaultOpenKeys={[`/${defaultOpen}`]} defaultSelectedKeys={[pathname]}>
          {
            router.map(item => baseStore.hasAuth(item.code) ? !item.showChildren
              ? (
                <Item key={item.path} className={item.path.slice(1)}>
                  <div>
                    <span>
                      <NavLink to={item.path} activeClassName="active">
                        {/* <Icon type={item.icon} /> */}
                        <i className="iconfont icon-pause-outline" />
                        <span>{item.name}</span>
                      </NavLink>
                    </span>
                  </div>
                </Item>
              )
              : (
                <SubMenu key={item.path} className={item.path.slice(1)}
                  title={(
                    <span>
                      <Icon type={item.icon} />
                      <span>
                        {item.name}
                      </span>
                    </span>)}>
                  {
                    item.children.map(e => (
                      <Item key={e.path}>
                        <NavLink to={e.path} activeClassName="active">
                          {e.name}
                        </NavLink>
                      </Item>
                    ))
                  }
                </SubMenu>
              ) : null)
          }
        </Menu>
      </Layout.Sider>
    );
  }
}

export default withRouter(Sider);
