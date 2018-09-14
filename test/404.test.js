import React from 'react';
import ReactDOM from 'react-dom';
import Page404 from '@/pages/Page404.jsx';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Page404 />, div);
  ReactDOM.unmountComponentAtNode(div);
});
