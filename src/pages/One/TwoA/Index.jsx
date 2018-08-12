import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Card, Button } from 'antd';
import { twoAClass } from './Index.scss';

@observer
class TwoA extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(props);
  }

  render() {
    const { stores: { twoA, adressModal } } = this.props;
    console.log(this.props, 'render');
    return (
      <Card className={twoAClass}>
        # CONTENT A
        {' '}
        {twoA.total}
        {adressModal.text}
        <Button onClick={adressModal.change}>
          Change
        </Button>
      </Card>
    );
  }
}

export default TwoA;
