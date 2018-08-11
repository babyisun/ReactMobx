import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Button, Icon, Alert } from 'antd';
import { demo } from './Index.scss';

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      loading,
      value,
      increment, decrement,
      asyncIncrement, asyncDecrement,
    } = this.props;

    return (
      <Card className={demo}>
        <Row>
          <Button type="primary">
            <Link to="/demo/add">
              <Icon type="plus-circle-o" />
新建页面
            </Link>
          </Button>
        </Row>
        <Alert message={value} />
        <Row>
          <Button type="primary" onClick={increment}>
+ 1
          </Button>
          <Button onClick={decrement}>
- 1
          </Button>
          <Button type="primary" onClick={asyncIncrement} loading={loading.asyncIncrement}>
            + 1（延迟 1s）
          </Button>
          <Button onClick={asyncDecrement} loading={loading.asyncDecrement}>
            - 1（延迟 1s）
          </Button>
        </Row>
      </Card>
    );
  }
}

export default Demo;
