import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../src/redux/store';
import TiffinMenu from '../../src/components/TiffinMenu';

// Mocking the axios call (you can use mockServiceWorker or jest.mock for this)
jest.mock('axios', () => ({
  get: jest.fn().mockResolvedValue({
    data: [
      { id: '1', name: 'Pizza', price: '12.99' },
      { id: '2', name: 'Burger', price: '8.99' },
    ],
  }),
}));

test('renders tiffin menu', async () => {
  render(
    <Provider store={store}>
      <Router>
        <TiffinMenu tiffinId="123" />
      </Router>
    </Provider>
  );

  // Check if loading state is displayed
  expect(screen.getByText(/loading/i)).toBeInTheDocument();

  // Wait for the data to be fetched and displayed
  await waitFor(() => screen.getByText(/Pizza/i));
  expect(screen.getByText(/Pizza/)).toBeInTheDocument();
  expect(screen.getByText(/12.99/)).toBeInTheDocument();
});

test('handles error in fetching data', async () => {
  jest.spyOn(axios, 'get').mockRejectedValueOnce(new Error('Failed to fetch'));

  render(
    <Provider store={store}>
      <Router>
        <TiffinMenu tiffinId="123" />
      </Router>
    </Provider>
  );

  await waitFor(() => screen.getByText(/Error/i));
  expect(screen.getByText(/Error/)).toBeInTheDocument();
});
