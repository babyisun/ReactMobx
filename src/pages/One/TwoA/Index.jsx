import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Card, Button, Table } from 'antd';
import { twoAClass } from './Index.scss';

@observer
class TwoA extends Component {
  // constructor(props) {
  //   super(props);
  // }
  componentDidMount() {
    // 加载数据
    // const { stores: { twoA } } = this.props;
    // twoA.load();
    this.props.stores.twoA.load();
  }

  columns = () => [{
    title: 'id',
    dataIndex: 'id',
  }, {
    title: 'time',
    dataIndex: 'time',
  }, {
    title: 'name',
    dataIndex: 'name',
  }, {
    title: 'pay_type',
    dataIndex: 'pay_type',
  }, {
    title: 'pay_fee',
    dataIndex: 'pay_fee',
  }, {
    title: 'package_end_time',
    dataIndex: 'package_end_time',
  }, {
    title: '操作',
  }];

  render() {
    const { stores: { twoA } } = this.props;
    console.log(this.props, 'render');
    return (
      <Card className={twoAClass}>
        # CONTENT A
        {' '}
        {twoA.total}
        <br />
        <Link to="/One/TwoA/Detail/123">
        详情页
        </Link>
        &nbsp;
        <Button onClick={twoA.add} loading={twoA.addLoading}>
          Add
        </Button>
        <Button onClick={twoA.load} loading={twoA.loadLoading}>
          Loading
        </Button>
        <Table
          bordered
          columns={this.columns()}
          dataSource={twoA.data}
          loading={twoA.loadLoading}
          rowKey={(row, i) => i}
          pagination={{
            hideOnSinglePage: true,
            total: twoA.total,
          }}
        />
      </Card>
    );
  }
}

export default TwoA;
