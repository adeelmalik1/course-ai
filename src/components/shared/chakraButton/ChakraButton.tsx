import { Button, ButtonProps } from '@chakra-ui/react';
import classNames from 'classnames';

export const CustomButton = ({ children, className, ...props }: ButtonProps): JSX.Element => (
  <Button {...props} className={classNames(className)}>
    {children}
  </Button>
);

export default CustomButton;
