import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { NavLink } from 'react-router-dom';
import router from '../router';
import styles from './Sider.scss';

const { SubMenu, Item } = Menu;

class Sider extends React.Component {
  render() {
    const { collapsed, onCollapse } = this.props;
    return (
      <Layout.Sider className={styles.sider} width={260} collapsible
        collapsed={collapsed} onCollapse={onCollapse}>
        <Menu theme="dark" mode="inline">
          {
            router.map(item => !item.children
              ? (
                <Item key={item.path} className={item.path.slice(1)}>
                  <div>
                    <span>
                      <Icon type={item.icon} />
                      <NavLink to={item.path} activeClassName="active">
                        {item.name}
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
              ))
          }
        </Menu>
      </Layout.Sider>
    );
  }
}

export default Sider;
