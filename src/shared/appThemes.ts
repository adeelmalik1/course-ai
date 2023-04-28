import { extendTheme } from '@chakra-ui/react';
export const appTheme = extendTheme({
  components: {
    Button: {
      variants: {
        primary: {
          bg: 'green.800',
          color: 'white',
        },
        danger: {
          bg: 'red.500',
          color: 'white',
        },
        outline: {
          bg: 'red.500',
          color: 'black',
        },
      },
    },
  },
});
