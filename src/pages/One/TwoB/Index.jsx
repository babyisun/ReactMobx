import React, { Component } from 'react';
import { Card } from 'antd';
import { twoB } from './Index.scss';

class TwoB extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(props);
  }

  render() {
    const { stores } = this.props;
    console.log(this.props, 'render');
    return (
      <Card className={twoB}>
        # CONTENT A
        {' '}
        {stores.TwoB.total}
      </Card>
    );
  }
}

export default TwoB;
