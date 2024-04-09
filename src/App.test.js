import { render, screen } from '@testing-library/react';
import App from './App';

test('random quote machine text', () => {
  render(<App />);
  const text = screen.getByText(/Random Quote Machine/i);
  expect(text).toBeInTheDocument();
});


test('button', () => {
  render(<App />);
  const button = screen.getAllByRole('button');
  const text2 = screen.getByText(/generate new quote!/i);
  expect(text2).toBeInTheDocument();
  expect(button).toHaveLength(1);
  

})



