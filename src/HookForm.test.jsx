import { fireEvent, render, screen, waitFor, act } from '@testing-library/react';
import HookForm from './HookForm';

test('Form renders', () => {
  render(<HookForm onSubmit={() => {}} />);

  const emailLabel = screen.getByText('Email (*)');
  expect(emailLabel).toBeInTheDocument();
});

test('Form can be submitted', async () => {
  // mockSubmit is called wit TWO args: data (hook form data) and event (React SyntheticEvent)
  // this is a workaround to avoid passing the synthetic event to the mocked function
  const mockSubmitOneArg = jest.fn()
  const mockSubmit = jest.fn(a => mockSubmitOneArg(a));
  render(<HookForm onSubmit={mockSubmit} />);

  const emailInput = screen.getByLabelText('Email (*)');
  fireEvent.change(emailInput, { target: { value: 'homer@simpsons.net' } });

  const passwordInput = screen.getByLabelText('Password (*)');
  fireEvent.change(passwordInput, { target: { value: 'Donut666' } });

  const bioInput = screen.getByLabelText(/biography/i);
  fireEvent.change(bioInput, { target: { value: "D'oh!" } });

  const pictureUrl =
    'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png';
  const pictureInput = screen.getByLabelText('Profile picture URL');
  fireEvent.change(pictureInput, {
    target: {
      value: pictureUrl,
    },
  });

  const countryInput = screen.getByLabelText('Country (*)');
  fireEvent.change(countryInput, { target: { value: 'US' } });

  const omnivorousDietInput = screen.getByLabelText('Omnivore');
  fireEvent.click(omnivorousDietInput);

  const rememberMeInput = screen.getByLabelText('Remember me');
  fireEvent.click(rememberMeInput);

  const submitBtn = screen.getByText('Send');
  fireEvent.click(submitBtn);

  await waitFor(() =>
    expect(mockSubmitOneArg).toHaveBeenCalledWith({
      email: 'homer@simpsons.net',
      password: 'Donut666',
      bio: "D'oh!",
      pictureUrl,
      country: 'US',
      diet: 'omnivore',
      rememberMe: true,
    })
  );
});