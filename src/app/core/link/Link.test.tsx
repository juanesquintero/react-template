import React from 'react';
import { render, screen } from '@testing-library/react';
import Link from './Link';

test('renders learn react link', () => {
  render(<Link/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
