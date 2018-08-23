import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Card, Button } from 'antd';
import { twoAClass } from './Index.scss';

@observer
class TwoA extends Component {
  // constructor(props) {
  //   super(props);
  // }

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
      </Card>
    );
  }
}

export default TwoA;
