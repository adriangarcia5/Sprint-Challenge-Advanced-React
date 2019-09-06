import React from 'react';
import ReactDOM from 'react-dom';
import { getByText } from '@testing-library/dom';
import { render } from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {
  render(<App />);
});

test('header appears on the screen', () => {
  let { getByText} = render(<App />);
  
  getByText(/player list/i);
});

  