import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Emoji from './emoji';

test('renders the Wellbeing Check-in component', () => {
  render(<Emoji/>);
  expect(screen.getByText(/Wellbeing Check-in/i)).toBeInTheDocument();
});

test('enables the continue button after emoji selection', () => {
  render(<Emoji/>);
  
  // Query using the aria-label or descriptive text for better accessibility support
  const emojiButton = screen.getByRole('button', { name: /Terrible/i });
  
  fireEvent.click(emojiButton);
  expect(screen.getByRole('button', { name: /Continue/i })).not.toBeDisabled();
});
