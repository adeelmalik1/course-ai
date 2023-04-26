import { fireEvent, screen } from '@testing-library/react';

import CustomButton from '../components/shared/chakraButton/ChakraButton';
import { render } from '../test-utils';

describe('CustomButton component', () => {
  const props = {
    onClick: jest.fn(),
    disabled: false,
  };

  it('should render a button with provided props', () => {
    render(<CustomButton {...props}>Click me</CustomButton>);
    const buttonElement = screen.getByText('Click me');

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveAttribute('type', 'button');
    expect(buttonElement).not.toBeDisabled();
  });

  it('should call onClick handler when clicked', () => {
    render(<CustomButton {...props}>Click me</CustomButton>);
    const buttonElement = screen.getByText('Click me');

    fireEvent.click(buttonElement);
    expect(props.onClick).toHaveBeenCalled();
  });

  it('should render a Chakra UI button component', () => {
    render(<CustomButton {...props}>Click me</CustomButton>);
    const buttonElement = screen.getByText('Click me');

    expect(buttonElement.tagName.toLowerCase()).toBe('button');
    expect(buttonElement).toHaveClass('chakra-button');
    expect(buttonElement).toHaveClass('css-i857na');
  });
});
