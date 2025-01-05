import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Stage from './Stage';

const stage = {
  _id: '1',
  title: 'Test Stage',
  cards: [{ _id: '1', title: 'Test Card', comments: 'Test Comments' }]
};

test('renders stage and cards', () => {
  const { getByText } = render(<Stage stage={stage} />);
  expect(getByText(/Test Stage/i)).toBeInTheDocument();
  expect(getByText(/Test Card/i)).toBeInTheDocument();
  expect(getByText(/Test Comments/i)).toBeInTheDocument();
});
