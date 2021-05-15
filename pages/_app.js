import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { ChakraProvider } from '@chakra-ui/react';
import '../public/fonts/poppins/poppins.css';
import '../public/fonts/open-sans/open-sans.css';
import Head from 'next/head';
import BaseLayout from '../src/components/layout';
import { theme } from '../src/theme';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default function App({ Component, pageProps }) {
  const Layout = Component.Layout || BaseLayout;
  return (
    <>
      <Head>
        <title>Attila Kling - Developer</title>
        <meta name="description" content="Personal site of Attila Kling" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <ChakraProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <Layout pageProps={pageProps}>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </ChakraProvider>
    </>
  );
}
