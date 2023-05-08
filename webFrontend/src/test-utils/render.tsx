import React from 'react';
import { Provider } from 'react-redux';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { render as rtlRender, RenderOptions, RenderResult } from '@testing-library/react';
import { Store } from 'redux';

/** Renders a React component for testing purposes.
@param {React.ReactElement} componentUnderTest - The component to render.
@param {Store} [store] - The Redux store to use in case the component is connected to Redux.
@param {RenderOptions} [renderOptions] - Additional options for the render function.
@returns {RenderResult} - The rendered component and testing utilities.
*/
const render = (
  componentUnderTest: React.ReactElement,
  store?: Store,
  renderOptions: RenderOptions = {}
): RenderResult => {
  if (store) {
    return rtlRender(
      <ChakraProvider theme={theme}>
        <Provider store={store}>{componentUnderTest}</Provider>
      </ChakraProvider>,
      { ...renderOptions }
    );
  }

  return rtlRender(<ChakraProvider theme={theme}>{componentUnderTest}</ChakraProvider>, { ...renderOptions });
};

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
