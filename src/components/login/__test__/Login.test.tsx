import { Router } from 'react-router-dom';
import { screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';

import { render } from '../../../test-utils/render';
import LoginForm from '../LoginForm';

const history = createMemoryHistory();
const renderComponent = (): void => {
  render(
    <Router location={'/'} navigator={history}>
      <LoginForm />
    </Router>
  );
};

describe('LOGIN', () => {
  describe('login button renders successfully', () => {
    it('check custom inputField and button working as expected', () => {
      renderComponent();

      //expect text email is available
      expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();

      //expect text password is available
      expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();

      //expect login button is available
      expect(screen.getByRole('button', { name: /Login/i })).toBeInTheDocument();

      //expect scocila icons are available
      expect(screen.getAllByTestId('social-icon')).toHaveLength(4);

      screen.getAllByTestId('social-icon').forEach((icon) => {
        expect(icon).toBeInTheDocument();
      });

      //expect Don't have an account yet? is available
      expect(screen.getByText("Don't have an account yet?")).toBeInTheDocument();

      // get the link role as signup
      expect(screen.getByRole('link', { name: /Signup/i })).toBeInTheDocument();
    });
  });
});
