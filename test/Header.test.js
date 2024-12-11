import { render, screen } from '@testing-library/react';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';

test('renders Kookie\'s Kitchen header', () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  
  expect(screen.getByText(/Kookie's Kitchen/i)).toBeInTheDocument();
  expect(screen.getByText(/Home/i)).toBeInTheDocument();
});
