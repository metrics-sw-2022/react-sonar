import { render, screen } from '@testing-library/react';
import App from './App';

test('renders animal title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Select an animal/i);
  expect(linkElement).toBeInTheDocument();
});
