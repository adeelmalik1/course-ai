import { Link, LinkProps } from '@chakra-ui/react';

type Props = LinkProps & {
  href: string;
};

const NavLink = ({ children, ...props }: Props): JSX.Element => (
  <Link
    px={2}
    py={1}
    // rounded={'md'}
    color={'#FFFFFF'}
    _hover={{
      textDecoration: 'none',
      //   bg: useColorModeValue('gray.900', 'gray.700'),
    }}
    {...props}
  >
    {children}
  </Link>
);

export default NavLink;
