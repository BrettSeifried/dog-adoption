import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders Ron', () => {
  render(<App />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});
