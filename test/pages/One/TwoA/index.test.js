// 对One/TwoA页面主页dom进行测试
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TwoA from '@/pages/One/TwoA/index.jsx';
import store from '@/pages/One/TwoA/store.js';

configure({ adapter: new Adapter() });

const props = {
  stores: {
    twoA: {
      load: jest.fn(),
    },
  },
};

// 渲染测试
it('renders pages/One/TwoA', () => {
  // 浅渲染一下react对应的dom，并使用jest.fn()模拟函数传进去
  const wrapper = shallow(<TwoA {...props} />);
  // 判断渲染出的组件中是否有Button组件存在
  expect(wrapper.find('Button').exists()).toBeTruthy();
  // 判断Link标签是否有to属性，且其值为/One/TwoA/Detail/123
  expect(wrapper.find('Link').props().to).toBe('/One/TwoA/Detail/123');
});

// store测试
it('reducer pages/One/TwoA', () => {
  const test = 'test';
  expect(store.method(test)).toEqual(test);
});
