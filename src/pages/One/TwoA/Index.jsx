import React, { Component } from 'react';
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
        <Button onClick={twoA.async_add} loading={twoA.addLoading}>
          Add
        </Button>
        <Button onClick={twoA.async_list_load} loading={twoA.loadLoading}>
          Loading
        </Button>
      </Card>
    );
  }
}

export default TwoA;
