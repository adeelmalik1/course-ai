import { Router } from 'react-router-dom';
import { screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';

import { render } from '../../../test-utils/render';
import SignupForm from '../SignupForm';

const renderComponent = (): void => {
  const history = createMemoryHistory();

  render(
    <Router location={'/login'} navigator={history}>
      <SignupForm />
    </Router>
  );
};

describe('SIGNUP', () => {
  describe('signup button renders successfully', () => {
    it('checks custom fields and buttons working as expected', () => {
      renderComponent();

      //expect text username is available
      expect(screen.getByLabelText(/Username/i)).toBeInTheDocument();

      //expect text email is available
      expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();

      //expect text password is available
      expect(screen.getByLabelText(/Password Input/i)).toBeInTheDocument();

      //expect text confirm password is available
      expect(screen.getByLabelText(/Confirm Password/i)).toBeInTheDocument();

      //expect signup button is available
      expect(screen.getByRole('button', { name: /Signup/i })).toBeInTheDocument();

      //expect scocila icons are available
      expect(screen.getAllByTestId('social-icon')).toHaveLength(4);
      screen.getAllByTestId('social-icon').forEach((icon) => {
        expect(icon).toBeInTheDocument();
      });

      //expect Already have an account? is available
      expect(screen.getByText('Already have an account?')).toBeInTheDocument();

      // get the link role as signup
      expect(screen.getByRole('link', { name: /Login/i })).toBeInTheDocument();
    });
  });
});
