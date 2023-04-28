import { extendTheme } from '@chakra-ui/react';

import { ButtonTheme as Button } from './buttonTheme';
const theme = extendTheme({
  components: {
    Button,
  },
});

export default theme;
