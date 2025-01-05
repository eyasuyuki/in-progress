import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

test('renders Task Management Tool heading', () => {
  const { getByText } = render(<App />);
  const headingElement = getByText(/Task Management Tool/i);
  expect(headingElement).toBeInTheDocument();
});
