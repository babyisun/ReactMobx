// 对One/TwoA页面主页dom进行测试
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TwoA from '@/pages/One/TwoA/index.jsx';


configure({ adapter: new Adapter() });

const props = {
  stores: {
    twoA: {
      load: jest.fn(),
    },
  },
};

it('renders without crashing', () => {
  const wrapper = shallow(<TwoA {...props} />);
});
