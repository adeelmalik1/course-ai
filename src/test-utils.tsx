import * as React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { render, RenderOptions } from '@testing-library/react';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const AllProviders = ({ children }: { children?: React.ReactNode }) => (
  <ChakraProvider theme={theme}>{children}</ChakraProvider>
);
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: AllProviders, ...options });

export { customRender as render };
