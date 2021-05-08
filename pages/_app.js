import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = extendTheme({});

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ChakraProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ChakraProvider>
    </>
  );
}
