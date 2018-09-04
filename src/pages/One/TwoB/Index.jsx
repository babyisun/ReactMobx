import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Card, Button } from 'antd';
import { twoBClass } from './Index.scss';

@observer
class TwoB extends Component {
  render() {
    const { stores: { twoB, adressModal } } = this.props;
    console.log(this.props, 'render');
    return (
      <Card className={twoBClass}>
        # CONTENT A
        {' '}
        {twoB.total}
        <br />
        {adressModal.text}
        <Button onClick={adressModal.change}>
          Change
        </Button>
      </Card>
    );
  }
}

export default TwoB;
