import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { act } from 'react';

describe('Dutchlingo user flow', () => {
  test('guides a new user from Today into onboarding learn flow', async () => {
    const user = userEvent.setup();

    render(<App />);

    await screen.findByRole('heading', {
      name: /start with your first dutch words and sentences/i
    });

    await user.click(screen.getByRole('button', { name: /start onboarding/i }));

    expect(
      await screen.findByRole('heading', {
        level: 1,
        name: /your first dutch words and sentences/i
      })
    ).toBeInTheDocument();
    expect(screen.getByText(/one word at a time/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /hear this word/i })).toBeInTheDocument();
  });

  test('requires word repetition before moving to the next onboarding word', async () => {
    const user = userEvent.setup();

    render(<App />);

    await user.click(await screen.findByRole('button', { name: /start onboarding/i }));

    const nextWordButton = await screen.findByRole('button', { name: /next word/i });
    expect(nextWordButton).toBeDisabled();

    await user.click(screen.getByRole('button', { name: /hear this word/i }));
    expect(screen.getByText(/repeat count: 1\/2/i)).toBeInTheDocument();
    expect(nextWordButton).toBeDisabled();

    await user.click(screen.getByRole('button', { name: /hear this word/i }));
    expect(screen.getByText(/repeat count: 2\/2/i)).toBeInTheDocument();
    expect(nextWordButton).toBeEnabled();
  });

  test('moves from learn to drill to exam to review in the daily flow', async () => {
    const user = userEvent.setup();

    render(<App />);

    await user.click(await screen.findByRole('button', { name: /start onboarding/i }));
    await screen.findByText(/one word at a time/i);

    await act(async () => {
      window.location.hash = '#drill';
      window.dispatchEvent(new HashChangeEvent('hashchange'));
    });

    await screen.findByRole('heading', { name: /practice the pattern until it sticks/i });
    await user.click(screen.getByRole('button', { name: /ik ben ana\./i }));
    await user.click(screen.getByRole('button', { name: /check answer/i }));
    await waitFor(() => {
      expect(screen.getByText(/correct\.|not correct yet\./i)).toBeInTheDocument();
    });

    await user.click(screen.getByRole('button', { name: /do exam task/i }));

    await screen.findByRole('heading', { name: /use the lesson in a practical exam-style prompt/i });
    await user.type(screen.getByPlaceholderText(/write or plan your dutch answer here/i), 'Ik ben Ana.');
    await user.click(screen.getByRole('button', { name: /finish exam task/i }));

    await screen.findByRole('heading', { name: /review mistakes, then continue tomorrow/i });
  });
});
