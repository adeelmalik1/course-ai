import { ButtonProps } from '@chakra-ui/react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import '@testing-library/jest-dom/extend-expect';

import CustomButton from '../components/shared/chakraButton/ChakraButton';
import { render } from '../test-utils/render';

const buttonProps = {
  variant: 'primary',
};
const renderComponent = (props: ButtonProps): void => {
  render(<CustomButton {...props}>Title</CustomButton>);
};

describe('<Button />', () => {
  it('should render custom button component', () => {
    renderComponent({ ...buttonProps });
    expect(screen.getByRole('button', { name: 'Title' })).toBeInTheDocument();
    expect(screen.getByText('Title')).toBeInTheDocument();
  });

  it('should have type=button by default', () => {
    renderComponent({ ...buttonProps });
    expect(screen.getByRole('button', { name: 'Title' })).toHaveAttribute('type', 'button');
  });

  describe('button is Enabled by default', () => {
    it('should be Enabled by default', () => {
      renderComponent({ ...buttonProps });
      expect(screen.getByRole('button', { name: 'Title' })).toBeEnabled();
    });

    it('should call onClick', () => {
      buttonClicked(0);
    });
  });

  describe('button is disabled', () => {
    it('should be Disabled', () => {
      renderComponent({ ...buttonProps });
      expect(screen.getByRole('button', { name: 'Title' })).toBeEnabled();
    });

    it('should call onClick', () => {
      buttonClicked(0, true);
    });
  });
});

//shared functionality to know how many times buttion has called

const buttonClicked = (times: number, disabled = false): void => {
  const onClick = jest.fn();

  renderComponent({ ...buttonProps, onClick: onClick, disabled: disabled });
  userEvent.click(screen.getByRole('button', { name: 'Title' }));
  expect(onClick).toHaveBeenCalledTimes(times);
};
