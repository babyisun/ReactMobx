// 基础框架引用
import React from 'react';
import { observer, inject } from 'mobx-react';
// import ajax from '@/utils/ajax';
// 底层ui组件引用
import { Layout } from 'antd';
import { withRouter } from 'next/router'
// import { Launcher } from '@/components/common/Launcher';
// 业务组件引用
// import router from '../router';
import Header from './Header';
import Sider from './Sider';
import Footer from './Footer';

// 样式引用
import styles from './BasicLayout.scss';


const { Content } = Layout;

// @inject('baseStore')
// @observer
class BasicLayout extends React.Component {
  state = {
    collapsed: false,
  }

  componentDidMount() {
    // console.log(this.props);
  }

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }

  render() {
    const {
      children,
      router
    } = this.props;
    const { collapsed } = this.state;
    return (
      <Layout>
        <Header collapsed={collapsed} />
        <Layout>
          <Sider collapsed={collapsed} onCollapse={this.onCollapse} />
          <Layout>
            <Content className={styles.content}>
              {/* <Path data={history.location.pathname} /> */}
              {children}
            </Content>
            <Footer />
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(BasicLayout);
