import { render, screen } from '@testing-library/react';
import Form from './Form';

test('Form renders', () => {
  render(<Form onSubmit={() => {}} />)

  const emailLabel = screen.getByText('Email (*)');
  expect(emailLabel).toBeInTheDocument();
})