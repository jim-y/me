import { Box } from '@chakra-ui/react';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Box>{children}</Box>
      <Footer />
    </>
  );
}
