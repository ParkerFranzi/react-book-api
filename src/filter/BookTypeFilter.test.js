import React from 'react';
import ReactDOM from 'react-dom';
import BookTypeFilter from './BookTypeFilter';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BookTypeFilter />, div);
  ReactDOM.unmountComponentAtNode(div);
});