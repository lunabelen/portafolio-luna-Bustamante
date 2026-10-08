import { render, screen } from '@testing-library/react';
import App from './App';

test('renderiza el título principal del portafolio', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /portafolio/i })).toBeInTheDocument();
});
