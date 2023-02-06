import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders learn react button', () => {
  render(<Button/>);
  const buttonElement = screen.getByText(/learn react/i);
  expect(buttonElement).toBeInTheDocument();
});
