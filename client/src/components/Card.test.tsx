import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Card from './Card';

const card = {
  _id: '1',
  title: 'Test Card',
  comments: 'Test Comments'
};

test('renders card', () => {
  const { getByText } = render(<Card card={card} />);
  expect(getByText(/Test Card/i)).toBeInTheDocument();
  expect(getByText(/Test Comments/i)).toBeInTheDocument();
});
