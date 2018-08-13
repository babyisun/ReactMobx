// 基础框架引用
import React from 'react';
import { observer, inject } from 'mobx-react';
import ajax from '@/utils/ajax';
// 底层ui组件引用
import { Layout, Menu, Icon, Popover } from 'antd';
import { NavLink, withRouter } from 'react-router-dom';
// import { Launcher } from '@/components/common/Launcher';
// 业务组件引用
import router from '../router';
// import Path from '@/components/exportlog/Path';

// 样式引用
import styles from './BasicLayout.scss';


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu, Item } = Menu;

@inject('baseStore')
@observer
class BasicLayout extends React.Component {
  state = {
    visible: false,
    collapsed: false,
  }

  componentDidMount() {
    // console.log(this.props);
  }


  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }

  getLogoClass = (collapsed, { logo, dark, darkSmall }) => `${logo} ${!collapsed ? dark : darkSmall}`;


  handleVisibleChange = (visible) => {
    this.setState({ visible });
  }

  handleExportLog = () => {
  }

  handleExportLogRetry = (task_id) => {
    const { exportlog: { retryExportLog } } = this.props;
    retryExportLog(task_id);
  }

  tebAccount = () => {
    ajax.get('/account/logout').then(data => {
      // storage.clear();
      const loginUrl = data.data.url.replace('%2FPLACEHOLDER%2F',
        encodeURIComponent(`${window.location.origin}/crmanage`));
      window.location.replace(loginUrl);
    });
    this.setState({
      visible: false,
    });
  };

  renderUser = () => (
    <Menu onClick={this.tebAccount}>
      {/* <Item key="account">账号设置</Item> */}
      <Item key="logout">
        退出登录
      </Item>
    </Menu>
  );

  render() {
    const {
      children,
      baseStore,
    } = this.props;
    const { visible, collapsed } = this.state;
    return (
      <Layout>
        <Header className={styles.header}>
          <h1 className={this.getLogoClass(collapsed, styles)}>
            <NavLink to="/">
              SaaS 商户端

            </NavLink>
          </h1>
          <div className={styles.storeElement}>
            欢迎您，North
            {' '}
            {`${baseStore.version}`}
          </div>
          <div className={styles.info}>
            <Popover
              content="这里放内容"
              overlayClassName={styles.exportLog}
              trigger="click"
              placement="topLeft"
              arrowPointAtCenter
              onVisibleChange={this.handleExportLog}
            >
              <div className={styles.download}>
                <span className={styles.downloadDot}
                  style={{ display: 'inline-block' }} />
              </div>
            </Popover>
            <Popover content={this.renderUser()}
              placement="topLeft" trigger="click" visible={visible}
              onVisibleChange={this.handleVisibleChange}>
              <div className={styles.avatar}>
                <div className={styles.avatarImage} />
              </div>
            </Popover>
          </div>
        </Header>
        <Layout>
          <Sider className={styles.sider} width={260} collapsible
            collapsed={collapsed} onCollapse={this.onCollapse}>
            <Menu theme="dark" mode="inline">
              {
                router.map(item => !item.children
                  ? (
                    <Item key={item.path} className={styles[item.path.slice(1)]}>
                      <Icon type={item.icon} />
                      <NavLink to={item.path} activeClassName="active">
                        <span>
                          {item.name}
                        </span>
                      </NavLink>
                    </Item>
                  )
                  : (
                    <SubMenu key={item.path} className={styles[item.path.slice(1)]}
                      title={(
                        <span>
                          <Icon type={item.icon} />
                          <span>
                            {item.name}
                          </span>
                        </span>
                      )}>
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
          </Sider>
          <Layout>
            <Content className={styles.content}>
              {/* <Path data={history.location.pathname} /> */}
              {children}
            </Content>
            <Footer>
              © 2018 SaaS Agent. Created by SFTC.
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(BasicLayout);
