// 对One/TwoA页面主页dom进行测试
import React from 'react';
import ReactDOM from 'react-dom';
import TwoA from '../../../../src/pages/One/TwoA/index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TwoA />, div);
  ReactDOM.unmountComponentAtNode(div);
});