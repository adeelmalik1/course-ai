import { extendTheme } from '@chakra-ui/react';
export const appTheme = extendTheme({
  components: {
    Button: {
      variants: {
        primary: {
          bg: 'green.800',
          color: '#f7fafc',
        },
        danger: {
          bg: 'red.500',
          color: '#f7fafc',
        },
        outline: {
          bg: 'red.500',
          color: 'black',
        },
      },
    },
  },
});
