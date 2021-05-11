import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { ChakraProvider, extendTheme, useBoolean } from '@chakra-ui/react';
import '../public/fonts/poppins/poppins.css';
import '../public/fonts/open-sans/open-sans.css';
import Head from 'next/head';
import BaseLayout from '../src/components/layout';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Spinner from '../src/components/Spinner';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = extendTheme({
  initialColorMode: 'light',
  useSystemColorMode: false,
  colors: {
    brand: {
      500: '#44337A'
    }
  },
  fonts: {
    body: 'Open Sans, sans-serif',
    heading: 'Poppins, serif',
    mono: 'Menlo, monospace'
  },
  styles: {
    global: (props) => ({
      'html, body': {
        color: props.colorMode === 'dark' ? 'white' : 'gray.600'
      },
      a: {
        color: props.colorMode === 'dark' ? 'brand.300' : 'brand.500',
        fontWeight: 500,
        fontFamily: 'Poppins, serif'
      }
    })
  },
  components: {
    Divider: {
      colorSchemes: {
        whiteAlpha: {
          color: 'white'
        }
      }
    }
  }
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [showOverlay, setShowOverlay] = useBoolean();
  const Layout = Component.Layout || BaseLayout;

  useEffect(() => {
    router.events.on('routeChangeStart', setShowOverlay.on);
    router.events.on('routeChangeComplete', setShowOverlay.off);
    router.events.on('routeChangeError', setShowOverlay.off);
    return () => {
      router.events.off('routeChangeStart', setShowOverlay.on);
      router.events.off('routeChangeComplete', setShowOverlay.off);
      router.events.off('routeChangeError', setShowOverlay.off);
    };
  }, []);

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
            {showOverlay && <Spinner />}
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </ChakraProvider>
    </>
  );
}
