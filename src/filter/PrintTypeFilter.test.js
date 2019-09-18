import React from 'react';
import ReactDOM from 'react-dom';
import PrintTypeFilter from './PrintTypeFilter';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PrintTypeFilter />, div);
  ReactDOM.unmountComponentAtNode(div);
});
