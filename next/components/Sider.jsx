import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import Link from 'next/link'
import { withRouter } from 'next/router';
import router from '../../src/router';
import styles from './Sider.scss';

const { SubMenu, Item } = Menu;

class Sider extends React.Component {
  render() {
    const { collapsed, onCollapse, router: { pathname } } = this.props;
    const path = pathname.split('/');
    const defaultOpen = path.length > 1 ? path[1] : '';
    console.log(defaultOpen);
    return (
      <Layout.Sider className={styles.sider} width={260} collapsible
        collapsed={collapsed} onCollapse={onCollapse}>
        <Menu theme="dark" mode="inline" defaultOpenKeys={[`/${defaultOpen}`]} defaultSelectedKeys={[pathname]}>
          {
            router.map(item => !item.children
              ? (
                <Item key={item.path} className={item.path.slice(1)}>
                  <div>
                    <span>
                      <Link prefetch href={item.path}>
                        <div>
                        <Icon type={item.icon} />
                        <span>{item.name}</span>
                        </div>
                      </Link>
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
                        <Link prefetch href={item.path}>
                          {e.name}
                        </Link>
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

export default withRouter(Sider);
