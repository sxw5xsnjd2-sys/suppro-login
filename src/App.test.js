import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the SUP-PRO landing page content', () => {
  render(<App />);

  expect(
    screen.getByRole('heading', {
      name: /Most supplement books want you to believe\. This one wants you to think\./i,
    })
  ).toBeInTheDocument();
  expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
  expect(
    screen.getByRole('button', { name: /Get the first chapter free/i })
  ).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /What you'll learn/i })).toBeInTheDocument();
  expect(screen.getByText(/Which supplements have meaningful evidence/i)).toBeInTheDocument();
  expect(
    screen.getByText(/Who may genuinely benefit and who should be cautious/i)
  ).toBeInTheDocument();
  expect(
    screen.getByText(/Where the risks, side effects, and interactions hide/i)
  ).toBeInTheDocument();
  expect(screen.queryByText(/Secure Checkout/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/Money Back Guarantee/i)).not.toBeInTheDocument();
  expect(
    screen.getByAltText(/SUP-PRO book cover with capsule artwork and the authors' names/i)
  ).toBeInTheDocument();
});
