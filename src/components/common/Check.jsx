import React, { Component, Fragment } from 'react'
import {
    inject
} from "mobx-react";

@inject("baseStore")
class Check extends Component {
  render() {
    const {children,baseStore,privilegeID} = this.props;
    return (
      <Fragment>
          {baseStore.privilege && baseStore.privilege.indexOf(+privilegeID) >= 0&&children}
      </Fragment>
    )
  }
}
export default Check;
