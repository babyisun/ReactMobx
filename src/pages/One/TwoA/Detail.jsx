import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Card, Breadcrumb } from 'antd';
import { twoAClass } from './Index.scss';

@observer
class Detail extends Component {
  render() {
    return (
      <Card className={twoAClass}>
        <Breadcrumb>
          <Breadcrumb.Item>
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/One/TwoA">
            详情页
            </Link>
          </Breadcrumb.Item>
        </Breadcrumb>
        # Detail A
      </Card>
    );
  }
}

export default Detail;
