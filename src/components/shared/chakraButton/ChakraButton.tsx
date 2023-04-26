import { Button, ButtonProps } from '@chakra-ui/react';

interface Props extends ButtonProps {
  children: React.ReactNode;
}

const CustomButton = ({ children, ...props }: Props): JSX.Element => <Button {...props}>{children}</Button>;

export default CustomButton;
