import React from 'react';
import { Layout, Menu, Popover } from 'antd';
import { NavLink } from 'react-router-dom';
import ajax from '@/utils/ajax';
import styles from './Header.scss';

const { Item } = Menu;

class Header extends React.Component {
    state = {
      visible: false,
    }

    getLogoClass = (collapsed, { logo, dark, darkSmall }) => `${logo} ${!collapsed ? dark : darkSmall}`;

    handleVisibleChange = (visible) => {
      this.setState({ visible });
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
      const { visible } = this.state;
      const { collapsed } = this.props;
      return (
        <Layout.Header className={styles.header}>
          <h1 className={this.getLogoClass(collapsed, styles)}>
            <NavLink to="/">
                SaaS 商户端
            </NavLink>
          </h1>
          <div className={styles.storeElement}>
                欢迎您，North
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
        </Layout.Header>
      );
    }
}

export default Header;
