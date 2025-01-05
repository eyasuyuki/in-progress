import React from 'react';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import Board from './Board';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

test('renders stages', async () => {
  mockedAxios.get.mockResolvedValue({
    data: [
      { _id: '1', title: 'Stage 1', cards: [] },
      { _id: '2', title: 'Stage 2', cards: [] }
    ]
  });

  const { getByText } = render(<Board />);

  await waitFor(() => {
    expect(getByText(/Stage 1/i)).toBeInTheDocument();
    expect(getByText(/Stage 2/i)).toBeInTheDocument();
  });
});
