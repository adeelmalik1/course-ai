import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ColorModeScript } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';

import theme from './styles/theme/theme';
import { App } from './App';

const container = document.getElementById('root');

if (!container) {
  throw new Error('Failed to find the root element');
}

const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <ColorModeScript />
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
