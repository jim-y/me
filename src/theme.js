import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  initialColorMode: 'system',
  useSystemColorMode: true,
  colors: {
    brand: {
      200: '#a57fe2',
      500: '#6328b1'
    },
    midgray: '#757575',
    gray: {
      50: '#F3F3F3'
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
        fontFamily: 'Poppins, sans-serif'
      }
    })
  },
  components: {
    Link: {
      baseStyle: (props) => ({
        fontWeight: 500,
        color: props.colorMode === 'dark' ? 'brand.200' : 'brand.500'
      })
    }
  }
});
