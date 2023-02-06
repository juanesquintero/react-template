import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Logo';

test('renders learn react link', () => {
  render(<Home app={{path: ''}} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
